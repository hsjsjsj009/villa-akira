import {DEFAULT_ACTION, MAX_500} from "./constants";

export function defaultAction() {
  return { type: DEFAULT_ACTION };
}
export function max500(query) {
  if(query.matches){
    return {type:MAX_500,payload:true}
  }else{
    return {type:MAX_500,payload:false}
  }
}