import {
  CHANGE_BAR_COLOR,
  CHANGE_INNER_COLOR,
  CHANGE_PAGE, LOAD_IMAGE, PLACE_IMAGE, READY
} from "./globalConstants";

const initialState = {
  page: 1,
  changeInnerColor: false,
  changeBarColor: false,
  image:[],
  imageStatus:false,
  ready: false
};

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case PLACE_IMAGE:
      return {
        ...state,
        image: action.payload
      };
    case LOAD_IMAGE:
      return {
        ...state,
        imageStatus: true
      };
    case READY:
      return {
        ...state,
        ready: true };
    case CHANGE_INNER_COLOR:
      return {
        ...state,
        changeInnerColor: action.payload
      };
    case CHANGE_BAR_COLOR:
      return {
        ...state,
        changeBarColor: action.payload
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload
      };
    default:
      return state;
  }
}

export default globalReducer;
