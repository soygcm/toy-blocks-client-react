import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './nodes.status';
import * as ActionCreatorsBlocks from './nodes.blocks';


describe('Actions', () => {
  beforeAll(() => {});
  afterAll(() => {});

  const node = {
    url: 'http://localhost:3002',
    online: false,
    name: null
  };

  it('should create an action to save fuel savings', () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.CHECK_NODE_STATUS_START,
      node
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (ActionCreators.checkNodeStatus(node))).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.checkNodeStatus(node)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });

  it('should create an action to get blocks', () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.GET_BLOCKS_START,
      node
    };

    expect(typeof (ActionCreatorsBlocks.getNodeBlocks(node))).toEqual('function');
    ActionCreatorsBlocks.getNodeBlocks(node)(dispatch);
    expect(dispatch).toBeCalledWith(expected);
  });

});
