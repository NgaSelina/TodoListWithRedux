import todoReducer from "./TodoReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers ({todos: todoReducer});
export default rootReducer;