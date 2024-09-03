
import { SET_JOBS } from '../actions/actionTypes';

const initialState = {
  list: []
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};

export default jobsReducer;
