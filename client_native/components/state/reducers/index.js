//reducers.js
import roomreducer from "./roomreduces";
import { combineReducers } from "redux";
const reducers = combineReducers({
  room: roomreducer,
});


export default reducers;
