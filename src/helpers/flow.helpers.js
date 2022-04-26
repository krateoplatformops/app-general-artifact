import dagre from 'dagre'

const getLayoutedElements = (nodes, edges, direction = 'LR') => {
  const dagreGraph = new dagre.graphlib.Graph()
  dagreGraph.setDefaultEdgeLabel(() => ({}))
  const nodeWidth = 200
  const nodeHeight = 70

  const isHorizontal = direction === 'LR'
  dagreGraph.setGraph({ rankdir: direction })

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight })
  })

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target)
  })

  dagre.layout(dagreGraph)

  nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id)
    node.targetPosition = isHorizontal ? 'left' : 'top'
    node.sourcePosition = isHorizontal ? 'right' : 'bottom'

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2
    }

    return node
  })

  return { nodes, edges }
}

const resourceIcon = (kind) => {
  switch (kind) {
    case 'Endpoints':
      return 'fa-globe'
    case 'Pod':
      return 'fa-box-open'
    case 'Ingress':
      return 'fa-arrow-right-to-bracket'
    case 'Mesh':
      return 'fa-wrench'
    case 'Service':
      return 'fa-network-wired'
    case 'Deployment':
      return 'fa-arrow-rotate-right'
    case 'ReplicaSet':
      return 'fa-check-double'
    case 'StatefulSet':
      return 'fa-compact-disk'
    case 'DaemonSet':
      return 'fa-ghost'
    case 'Job':
      return 'fa-fan'
    case 'CronJob':
      return 'fa-rotate-left'
    case 'ReplicationController':
      return 'fa-arrow-down-up-across-line'
    case 'PersistentVolumeClaim':
      return 'fa-hard-drive'
    case 'PersistentVolume':
      return 'fa-hard-drive'
    case 'ConfigMap':
      return 'fa-clipboard-check'
    case 'Secret':
      return 'fa-key'
    case 'ServiceAccount':
      return 'fa-user-group'
    case 'Role':
      return 'fa-user-group'
    case 'RoleBinding':
      return 'fa-user-group'
    case 'ClusterRole':
      return 'fa-user-group'
    case 'ClusterRoleBinding':
      return 'fa-user-group'
    case 'HorizontalPodAutoscaler':
      return 'fa-stairs'
    case 'StorageClass':
      return 'fa-hard-drive'
    case 'APIService':
      return 'fa-retweet'
    case 'Namespace':
      return 'fa-vector-square'
    default:
      return 'fa-puzzle-piece'
  }
}

const iconColor = (status) => {
  switch (status) {
    case 'Healthy':
      return 'Healthy'
    case 'Progressing':
      return 'Progressing'
    case 'Unhealthy':
      return 'Unhealthy'
    default:
      return 'Unknown'
  }
}

export const flowHelper = {
  getLayoutedElements,
  resourceIcon,
  iconColor
}
