import {
  DEFAULT_ACTION,
  MAX_1024,
  MAX_500,
  MAX_768,
  MIN_1024,
  MIN_768
} from "./constants";

export function defaultAction() {
  return { type: DEFAULT_ACTION };
}
export function max500(query) {
  if (query.matches) {
    return { type: MAX_500, payload: true };
  } else {
    return { type: MAX_500, payload: false };
  }
}

export function max768(query) {
  if (query.matches) {
    return { type: MAX_768, payload: true };
  } else {
    return { type: MAX_768, payload: false };
  }
}

export function max1024(query) {
  if (query.matches) {
    return { type: MAX_1024, payload: true };
  } else {
    return { type: MAX_1024, payload: false };
  }
}
export function min1024(query) {
  if (query.matches) {
    return { type: MIN_1024, payload: true };
  } else {
    return { type: MIN_1024, payload: false };
  }
}

export function min768(query) {
  if (query.matches) {
    return { type: MIN_768, payload: true };
  } else {
    return { type: MIN_768, payload: false };
  }
}
