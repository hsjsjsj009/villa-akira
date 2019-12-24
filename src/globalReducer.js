import {
  CHANGE_BAR_COLOR,
  CHANGE_INNER_COLOR,
  CHANGE_PAGE
} from "./globalConstants";

const initialState = {
  page: 1,
  changeInnerColor: false,
  changeBarColor: false
};

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INNER_COLOR:
      return {
        ...initialState,
        changeInnerColor: action.payload
      };
    case CHANGE_BAR_COLOR:
      return {
        ...initialState,
        changeBarColor: action.payload
      };
    case CHANGE_PAGE:
      return {
        ...initialState,
        page: action.payload
      };
    default:
      return state;
  }
}

export default globalReducer;
