import React, { useState } from 'react'
import ReactFlow, { Controls } from 'react-flow-renderer'

import YamlView from '../../../../../UI/YamlView/YamlView'
import css from './ArgoCD.module.scss'
import Modal from '../../../../../UI/Modal/Modal'
import CustomNode from './CustomNode/CustomNode'
import { uiConstants } from '../../../../../../constants'
import { pluginHelper } from '../../../../../../helpers'

const nodeTypes = {
  customNode: CustomNode
}

const ArgoCD = ({
  deploy,
  plugin,
  content,
  detailsCallHandler,
  detailsContent,
  detailsClearHandler
}) => {
  const [currentResource, setCurrentResource] = useState(null)

  const closeModalHandler = () => {
    setCurrentResource(null)
    detailsClearHandler()
  }

  const resourceDetailsHandler = (data) => {
    let url = new URL(pluginHelper.createCallUrl(plugin))
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

    detailsCallHandler({
      url: url.toString(),
      key: uiConstants.proxy.resourceYaml
    })
    setCurrentResource(data)
  }

  return (
    <React.Fragment>
      <div className={css.FlowContainer}>
        <ReactFlow
          nodes={content.nodes.map((n) => {
            return {
              ...n,
              data: {
                ...n.data,
                resourceDetailsHandler: resourceDetailsHandler
              }
            }
          })}
          edges={content.edges}
          nodesDraggable={false}
          nodesConnectable={false}
          nodeTypes={nodeTypes}
        >
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
      {currentResource && detailsContent && (
        <Modal
          title={`${currentResource.kind} - ${currentResource.name}`}
          closeButtonHandler={closeModalHandler}
        >
          <YamlView
            data={JSON.parse(detailsContent.manifest)}
            fileName={detailsContent.manifest?.metadata?.name}
          />
        </Modal>
      )}
    </React.Fragment>
  )
}

export default ArgoCD
