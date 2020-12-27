import {combineReducers} from "redux";
import { TYPES } from "../Actions";

const INIT_STATE = {
    todos : []
}

function addTodo (state = INIT_STATE,action){
    switch (action.type) {
        case TYPES.ADD_TODO:
            return [...state.todos,action.element]
    }
}

export default addTodo;