import { DEFAULT_ACTION, READY } from "./constants";

export function defaultAction() {
  return { type: DEFAULT_ACTION };
}
export function ready() {
  return { type: READY };
}
