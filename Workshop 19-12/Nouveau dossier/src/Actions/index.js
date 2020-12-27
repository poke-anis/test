const ADD_TODO ='ADD_TODO'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
const SHOW_ACTIVE = 'SHOW_ACTIVE'
const SHOW_COMPLETED = 'SHOW_COMPLETED'
const SHOW_ALL = 'SHOW_ALL'

export const addTodo =(text) => ({
    type: ADD_TODO,
    text,
})

export const setVisibilityFilter = (filter) => ({
	type: SET_VISIBILITY_FILTER,
	filter,
})


