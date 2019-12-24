import {
  CHANGE_BAR_COLOR,
  CHANGE_INNER_COLOR,
  CHANGE_PAGE
} from "./globalConstants";

export const changePage = page => {
  return { type: CHANGE_PAGE, payload: page };
};

export const changeInnerColor = bool => {
  return { type: CHANGE_INNER_COLOR, payload: bool };
};

export const changeBarColor = bool => {
  return { type: CHANGE_BAR_COLOR, payload: bool };
};
