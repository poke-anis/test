import './App.css';
import { Component, useState, useEffect } from "react";
function App() {
  const [form,setForm] = useState(<div>
  <form >
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"></input>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button onClick={() => changeForm()} type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>);
 const changeForm = () => {setForm(<div>You're logged in</div>)
 }
  return (
    <div>
      <Nav/>
      <Carousse form={form} />
    </div>
  );
}


const Carousse = (props) => {
 const {form} = props
  return(
    <div id="test" className="position-fixed top-50 start-50 translate-middle">
      {form}
    </div>
    
  );
};

const Nav = (props) => {
  return(
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
      <a class="navbar-brand" href="#">My login Website</a>
      </div>
    </nav>
  )
}

export default App;
