import React, { useCallback, useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Controls
} from 'react-flow-renderer'
import yaml from 'js-yaml'
import YamlView from '../../../../UI/YamlView/YamlView'

import css from './Resources.module.scss'
import { proxyFetch, proxyDeleteKey } from '../../../../../redux/actions'
import { flowHelper } from '../../../../../helpers'
import Modal from '../../../../UI/Modal/Modal'
import uris from '../../../../../uris'
import CustomNode from './CustomNode/CustomNode'
import { uiConstants } from '../../../../../constants'

const nodeTypes = {
  customNode: CustomNode
}

const Resources = ({ deploy, deployment, proxy }) => {
  const dispatch = useDispatch()
  const [currentResource, setCurrentResource] = useState(null)

  const [nodes, setNodes] = useNodesState([])
  const [edges, setEdges] = useEdgesState([])
  const p = deploy.claim.spec.dashboard.plugins.find(
    (x) => x.name === 'resources'
  )

  const closeModalHandler = () => {
    setCurrentResource(null)
    dispatch(
      proxyDeleteKey({
        key: uiConstants.proxy.resourceYaml
      })
    )
  }

  const resourceDetailsHandler = useCallback(
    (data) => {
      let url = new URL(
        `${uris.apiBase}${uris.proxy}/resources/${p.value}/resource`
      )
      if (data.name) {
        url.searchParams.append('name', data.name)
        url.searchParams.append('resourceName', data.name)
      }
      if (data.namespace) {
        url.searchParams.append('namespace', data.namespace)
      }
      if (data.version) {
        url.searchParams.append('version', data.version)
      }
      if (data.kind) {
        url.searchParams.append('kind', data.kind)
      }
      if (data.group) {
        url.searchParams.append('group', data.group)
      }

      dispatch(
        proxyFetch({
          url: url.toString(),
          key: uiConstants.proxy.resourceYaml
        })
      )
      setCurrentResource(data)
    },
    [dispatch, p.value]
  )

  useEffect(() => {
    if (p) {
      let url = `${uris.apiBase}${uris.proxy}/resources/${p.value}/resource-tree`
      dispatch(
        proxyFetch({
          url,
          key: uiConstants.proxy.resourceTree
        })
      )
    }
    return () =>
      dispatch(
        proxyDeleteKey({
          key: uiConstants.proxy.resourceTree
        })
      )
  }, [dispatch, p])

  useEffect(() => {
    if (proxy.data[uiConstants.proxy.resourceTree] && nodes.length === 0) {
      const res = proxy.data[uiConstants.proxy.resourceTree].nodes

      const initialNodes = res.map((node) => {
        return {
          id: node.uid,
          position: { x: 0, y: 0 },
          data: {
            name: node.name,
            kind: node.kind,
            health: node.health ? node.health.status : 'Unknown',
            namespace: node.namespace,
            version: node.version,
            group: node.group,
            resourceDetailsHandler: resourceDetailsHandler
          },
          type: 'customNode'
        }
      })
      initialNodes.push({
        id: '1',
        position: { x: 0, y: 0 },
        data: {
          name: deploy.claim.spec.name
        },
        type: 'customNode'
      })
      const initialEdges = []
      res.forEach((node, index) => {
        if (node.parentRefs) {
          node.parentRefs.forEach((r) => {
            initialEdges.push({
              id: `${node.uid}-${r.uid}`,
              target: node.uid,
              source: r.uid,
              animated: true,
              type: 'smoothstep'
            })
          })
        } else {
          initialEdges.push({
            id: index,
            target: node.uid,
            source: '1',
            animated: true,
            type: 'smoothstep'
          })
        }
      })

      // graph design
      flowHelper.getLayoutedElements(initialNodes, initialEdges)

      setNodes(initialNodes)
      setEdges(initialEdges)
    }
  }, [
    deploy.claim.spec.name,
    nodes.length,
    proxy.data,
    resourceDetailsHandler,
    setEdges,
    setNodes
  ])

  return (
    <React.Fragment>
      <div className={css.FlowContainer}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodesDraggable={false}
          nodesConnectable={false}
          nodeTypes={nodeTypes}
        >
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
      {currentResource && proxy.data[uiConstants.proxy.resourceYaml] && (
        <Modal
          title={`${currentResource.kind} - ${currentResource.name}`}
          closeButtonHandler={closeModalHandler}
        >
          <YamlView
            yaml={yaml.dump(
              JSON.parse(proxy.data[uiConstants.proxy.resourceYaml].manifest)
            )}
          />
        </Modal>
      )}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Resources)
