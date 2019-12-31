import {
  CHANGE_BAR_COLOR,
  CHANGE_INNER_COLOR,
  CHANGE_PAGE,
  INDONESIA,
  LOAD_IMAGE,
  PLACE_IMAGE,
  READY
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

export function ready() {
  return { type: READY };
}

export function loadImage() {
  return { type: LOAD_IMAGE };
}

export function placeImage(listImage) {
  return { type: PLACE_IMAGE, payload: listImage };
}

export function indonesiaLanguage() {
  return { type: INDONESIA };
}
