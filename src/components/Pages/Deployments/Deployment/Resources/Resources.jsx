import React, { useCallback, useState } from 'react'
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  isNode,
  Controls
} from 'react-flow-renderer'
import dagre from 'dagre'

import Card from '../../../../UI/Card/Card'
import css from './Resources.module.scss'

const dagreGraph = new dagre.graphlib.Graph()
dagreGraph.setDefaultEdgeLabel(() => ({}))

const nodeWidth = 172
const nodeHeight = 36

const position = { x: 0, y: 0 }
const edgeType = 'smoothstep'
const initialElements = [
  {
    id: '1',
    data: { label: 'fat-squirrel domain' },
    position,
    type: 'input'
  },
  {
    id: '2',
    data: { label: 'fat-squirrel namespace' },
    position
  },
  {
    id: '3',
    data: { label: 'backend' },
    position
  },
  {
    id: '4',
    data: { label: 'frontend' },
    position
  },
  {
    id: '5',
    data: { label: 'fat-squirrel api' },
    position
  },
  {
    id: '6',
    data: { label: 'fat-squirrel db' },
    position
  },
  {
    id: 'e13',
    source: '2',
    target: '3',
    //  type: edgeType,
    animated: true
  },
  {
    id: 'e12',
    source: '1',
    target: '2',
    // type: edgeType,
    animated: true
  },
  {
    id: 'e22a',
    source: '2',
    target: '4',
    // type: edgeType,
    animated: true
  },
  {
    id: 'e22b',
    source: '4',
    target: '5',
    label: 'consumes',
    // type: edgeType,
    animated: true,
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 },
    arrowHeadType: 'arrow'
  },
  {
    id: 'e22c',
    source: '3',
    target: '6',
    // type: edgeType,
    animated: true,
    label: 'depends on',
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 },
    arrowHeadType: 'arrow'
  },
  {
    id: 'e22c5',
    source: '3',
    target: '5',
    // type: edgeType,
    animated: true,
    label: 'exposes',
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 },
    arrowHeadType: 'arrow'
  },
  {
    id: 'e2222',
    source: '4',
    target: '5',
    // type: edgeType,
    animated: true,
    label: 'consumes',
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 },
    arrowHeadType: 'arrow'
  }
]

const getLayoutedElements = (elements, direction = 'TB') => {
  const isHorizontal = direction === 'LR'
  dagreGraph.setGraph({ rankdir: direction })

  elements.forEach((el) => {
    if (isNode(el)) {
      dagreGraph.setNode(el.id, { width: nodeWidth, height: nodeHeight })
    } else {
      dagreGraph.setEdge(el.source, el.target)
    }
  })

  dagre.layout(dagreGraph)

  return elements.map((el) => {
    if (isNode(el)) {
      const nodeWithPosition = dagreGraph.node(el.id)
      el.targetPosition = isHorizontal ? 'left' : 'top'
      el.sourcePosition = isHorizontal ? 'right' : 'bottom'
      el.position = {
        x: nodeWithPosition.x - nodeWidth / 2 + Math.random() / 1000,
        y: nodeWithPosition.y - nodeHeight / 2
      }
    }

    return el
  })
}

const layoutedElements = getLayoutedElements(initialElements)

const Resources = ({ deploy }) => {
  const [elements, setElements] = useState(layoutedElements)
  const onConnect = (params) =>
    setElements((els) =>
      addEdge({ ...params, type: 'smoothstep', animated: true }, els)
    )

  const onLayout = useCallback(
    (direction) => {
      const layoutedElements = getLayoutedElements(elements, direction)
      setElements(layoutedElements)
    },
    [elements]
  )

  return (
    <Card>
      <div className={css.Container}>
        <ReactFlowProvider className={css.Container}>
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            connectionLineType='smoothstep'
            className={css.Container}
          />
          <div className='controls'>
            <button onClick={() => onLayout('TB')}>vertical layout</button>
            <button onClick={() => onLayout('LR')}>horizontal layout</button>
          </div>
        </ReactFlowProvider>
      </div>
    </Card>
  )
}

export default Resources
