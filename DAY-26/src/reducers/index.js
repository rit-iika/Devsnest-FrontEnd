import display from "./display";

import { combineReducers } from "redux";
const rootReducer = combineReducers({
  user: display
});
export default rootReducer;
