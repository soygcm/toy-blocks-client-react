import fetch from 'cross-fetch';
import * as types from '../constants/actionTypes';

const getNodeBlocksStart = (node) => {
  return {
    type: types.GET_BLOCKS_START,
    node
  };
};

const getNodeBlocksSuccess = (node, res) => {
  return {
    type: types.GET_BLOCKS_SUCCESS,
    node,
    res
  };
};

const getNodeBlocksFailure = node => {
  return {
    type: types.GET_BLOCKS_FAILURE,
    node,
  };
};

export function getNodeBlocks(node) {
  return async (dispatch) => {
    try {
      dispatch(getNodeBlocksStart(node));
      const res = await fetch(`${node.url}/api/v1/blocks`);

      if (res.status >= 400) {
        dispatch(getNodeBlocksFailure(node));
      }

      const json = await res.json();
      dispatch(getNodeBlocksSuccess(node, json));
    } catch (err) {
      dispatch(getNodeBlocksFailure(node));
    }
  };
}

export function getNodesBlocks(list) {
  return (dispatch) => {
    list.forEach(node => {
      dispatch(getNodeBlocks(node));
    });
  };
}


var example = {
  "data": [{
    "id": "1",
    "type": "blocks",
    "attributes": {
      "index": 1,
      "timestamp": 1530674152,
      "data": "every",
      "previous-hash": "KsmmdGrKVDr43/OYlM/oFzr7oh6wHG+uM9UpRyIoVe8=",
      "hash": "udfJLmh13UNAxG4F/1on07OMN1K1vCuaTYn9H2XGiX0="
    }
  }, {
    "id": "2",
    "type": "blocks",
    "attributes": {
      "index": 2,
      "timestamp": 1530674158,
      "data": "good",
      "previous-hash": "udfJLmh13UNAxG4F/1on07OMN1K1vCuaTYn9H2XGiX0=",
      "hash": "abIz/lhtXs6wn1GfEdwju0sdYmcejQii+/25qHn5xFA="
    }
  }, {
    "id": "3",
    "type": "blocks",
    "attributes": {
      "index": 3,
      "timestamp": 1530674162,
      "data": "boy",
      "previous-hash": "abIz/lhtXs6wn1GfEdwju0sdYmcejQii+/25qHn5xFA=",
      "hash": "YhPoR2RzhsmdVQDYX6MkDoD4Pf1xCRk+3ZNDqZnTqVw="
    }
  }, {
    "id": "4",
    "type": "blocks",
    "attributes": {
      "index": 4,
      "timestamp": 1530674166,
      "data": "does",
      "previous-hash": "YhPoR2RzhsmdVQDYX6MkDoD4Pf1xCRk+3ZNDqZnTqVw=",
      "hash": "gYRUBsJpso7+YG4ZbNAcEgWxfilkTHOg0exHbK8tJpw="
    }
  }, {
    "id": "5",
    "type": "blocks",
    "attributes": {
      "index": 5,
      "timestamp": 1530674170,
      "data": "fine",
      "previous-hash": "gYRUBsJpso7+YG4ZbNAcEgWxfilkTHOg0exHbK8tJpw=",
      "hash": "k1Tq++ctFy3ijGRMPjRmFYTbQHcov74k+L7HXLOz41A="
    }
  }]
}
