import { ADD_TODO, REMOVE_TODO } from "./ActionType";

export const AddTodo = payload => ({type: ADD_TODO, payload});

export const RemoveTodo = payload => ({type: REMOVE_TODO, payload});