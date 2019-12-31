import { fromJS } from "immutable";
import {
  DEFAULT_ACTION,
  MAX_1024,
  MAX_500,
  MAX_768,
  MIN_1024,
  MIN_768
} from "./constants";

const initialState = {
  max500: false,
  min768: false,
  min1024: false,
  max1024: false,
  max768: false
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case MIN_1024:
      return {
        ...state,
        min1024: action.payload
      };
    case MIN_768:
      return {
        ...state,
        min768: action.payload
      };
    case MAX_768:
      return {
        ...state,
        max768: action.payload
      };
    case MAX_1024:
      return {
        ...state,
        max1024: action.payload
      };
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
