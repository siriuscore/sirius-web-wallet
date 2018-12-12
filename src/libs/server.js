import insight from 'libs/nodes/insight'
import siriusInfo from 'libs/nodes/siriusInfo'

let nodeConfigs = {
  insight,
  siriusInfo
}

const defaultNodeId = 'siriusInfo'
let currentNodeId = defaultNodeId

export default {
  currentNode() {
    return nodeConfigs[currentNodeId]
  },

  setNodeId(nodeId) {
    if (nodeConfigs[nodeId]) {
      currentNodeId = nodeId
    }
  }
}
