const initialState ={
    todos:[]
}

const reducer = (state = initialState, action) =>{
switch (action.type){
    case 'ADD_TODO':
        return{
            ...state,
            todos: [...state.todos,action.payload],
        }
    case 'DELETE_TODO':
        console.log(state)
        return{
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload),
        };
    case 'COMPLETE_TODO':
        return{ 
            ...state,
            todos: state.todos.map(
            todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } :
            todo
        )}
    default:
        return state;
}
}
export default reducer;