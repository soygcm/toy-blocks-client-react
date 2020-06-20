import * as ActionTypes from '../constants/actionTypes';
import reducer from './nodes.status';
import reducerBlocks from './nodes.blocks';
import initialState from './initialState';


describe('Reducers::Nodes', () => {
  const getInitialState = () => {
    return initialState().nodes;
  };

  const nodeA = {
    url: 'http://localhost:3002',
    online: false,
    name: null
  };

  const nodeB = {
    url: 'http://localhost:3003',
    online: false,
    name: null
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle CHECK_NODE_STATUS_START', () => {
    const appState = {
      list: [nodeA, nodeB]
    };
    const action = { type: ActionTypes.CHECK_NODE_STATUS_START, node: nodeA };
    const expected = {
      list: [
        {
          ...nodeA,
          loading: true
        },
        nodeB
      ]
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it('should handle CHECK_NODE_STATUS_SUCCESS', () => {
    const appState = {
      list: [nodeA, nodeB]
    };
    const action = { type: ActionTypes.CHECK_NODE_STATUS_SUCCESS, node: nodeA, res: {node_name: 'alpha'} };
    const expected = {
      list: [
        {
          ...nodeA,
          online: true,
          name: 'alpha',
          loading: false
        },
        nodeB
      ]
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it('should handle CHECK_NODE_STATUS_FAILURE', () => {
    const appState = {
      list: [
        {
          ...nodeA,
          online: true,
          name: 'alpha',
          loading: false
        },
        nodeB
      ]
    };
    const action = { type: ActionTypes.CHECK_NODE_STATUS_FAILURE, node: nodeA };
    const expected = {
      list: [
        {
          ...nodeA,
          online: false,
          name: 'alpha',
          loading: false
        },
        nodeB
      ]
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  ///

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducerBlocks(undefined, action)).toEqual(expected);
  });

  it('should handle START', () => {
    const appState = {
      list: [nodeA, nodeB]
    };
    const action = { type: ActionTypes.GET_BLOCKS_START, node: nodeA };
    const expected = {
      list: [
        {
          ...nodeA,
          loading: true
        },
        nodeB
      ]
    };

    expect(reducerBlocks(appState, action)).toEqual(expected);
  });

  it('should handle SUCCESS', () => {
    const appState = {
      list: [nodeA, nodeB]
    };
    const action = { type: ActionTypes.GET_BLOCKS_SUCCESS, node: nodeA, res: {node_name: 'alpha', blocks: []} };
    const expected = {
      list: [
        {
          ...nodeA,
          online: true,
          name: 'alpha',
          loading: false,
          blocks: []
        },
        nodeB
      ]
    };

    expect(reducerBlocks(appState, action)).toEqual(expected);
  });

  it('should handle FAILURE', () => {
    const appState = {
      list: [
        {
          ...nodeA,
          online: true,
          name: 'alpha',
          loading: false
        },
        nodeB
      ]
    };
    const action = { type: ActionTypes.GET_BLOCKS_FAILURE, node: nodeA };
    const expected = {
      list: [
        {
          ...nodeA,
          online: false,
          name: 'alpha',
          loading: false
        },
        nodeB
      ]
    };

    expect(reducerBlocks(appState, action)).toEqual(expected);
  });

});
