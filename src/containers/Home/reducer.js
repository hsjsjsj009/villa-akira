import { fromJS } from "immutable";
import {DEFAULT_ACTION, MAX_500} from "./constants";

const initialState = {
  max500:false,
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case MAX_500:
      return {
        ...state,
        max500: action.payload
      };
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default homeReducer;
