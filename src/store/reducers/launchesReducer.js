import {QUERY} from '../actions/launches';

const initialState = {
  queryData: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUERY:
      return {
        ...state,
        queryData: action.payload,
      };
 
    default:
      return state;
  }
};

export default userReducer;
