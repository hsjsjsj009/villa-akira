/* eslint-disable */
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import globalReducer from "./../globalReducer";
import homeReducer from "../containers/Home/reducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    global: globalReducer,
    home: homeReducer
  });
