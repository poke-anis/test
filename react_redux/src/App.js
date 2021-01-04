import React, {useState,useReducer}from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";

function App() {


  return (
    <div>
      <h1>Todo List</h1>
        <AddTask />
        <ListTask />
    </div>
  );
}



function AddTask(props) {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  const handleChange = event => setNewTodo(event.target.value);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
    type: 'ADD_TODO',
    payload: {
      label: newTodo,
      id: Math.ceil(Math.random()*100),
      completed: false,
    }
  })}


  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    inp:{
      backgroundColor: 'white',
    }
  }));
  const classes = useStyles();

return (
  <div>
    <form>
      <TextField onChange={handleChange} name ="Task" className={classes.inp} id="outlined-basic" label="Task" variant="outlined" />
     <Button variant="contained" color="secondary" type="submit" onClick={handleClick}>
      Add Todo
    </Button>
    </form>
  </div>

);
}


function ListTask(props) {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const handleClick = id => dispatch({
    type: 'DELETE_TODO',
    payload: id,
  });

  const handleClick2 = (id) => {
    dispatch({
    type: 'COMPLETE_TODO',
    payload: id,
  })}
  if (!todos || !todos.length){
    return <p>No Todos</p>
  }
  return (
    <div>
      <h1>my todos</h1>
      <ul>
      {todos.map(todo => <li key={todo.id}>
        {todo.label}
        <Button variant="contained" color="primary" type="submit" onClick={() =>handleClick(todo.id)}>Delete Todo</Button>
        <Button variant="contained" color="primary" type="submit" onClick={() =>handleClick2(todo.id)}>complete Todo</Button></li>)}
      </ul>
        <h1>completed</h1>
        <div>{todos.map(todo => todo.completed === true  ? <p>{todo.label}</p> : null)}</div>

    </div>
  
  );
  }

    


export default App;
