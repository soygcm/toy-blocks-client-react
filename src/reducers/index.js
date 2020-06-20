import { combineReducers } from 'redux';
import nodes from './nodes.status';
import nodesBlocks from './nodes.blocks';

const rootReducer = combineReducers({
  nodes,
  nodesBlocks
});

export default rootReducer;
