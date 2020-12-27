import { combineReducers } from 'redux'
import { ADD_TODO,SET_VISIBILITY_FILTER,SHOW_ALL  } from '../Actions/index'


{
    initState: [{text: "nigga"}]
}
const addTodo = (state = initState, action ) => {
    switch (action.type){
        case ADD_TODO :
            return action.text

    }
}

const visibilityFilter = (state = SHOW_ALL, action) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}


const rootReducer = combineReducers({
	addTodo,
	visibilityFilter,
})

export default rootReducer