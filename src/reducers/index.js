import { combineReducers } from 'redux';
import nodes from './nodes.status';

const rootReducer = combineReducers({
  nodes,
});

export default rootReducer;
