import { fromJS } from "immutable";
import { DEFAULT_ACTION, READY } from "./constants";

const initialState = {
  ready: false
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case READY:
      return { ready: true };
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default homeReducer;
