import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Todos from './components/todos';
import Footer from './components/footer';
import AddTodo from './components/addtodo';
import About from './components/about';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  let itodo;
  if(localStorage.getItem("todos")===null){
    itodo = [];
  }
  else{
    itodo = JSON.parse(localStorage.getItem("todos"));
  }
  function onAdd(title, desc){
    console.log(title, desc);
    let sno;
    if(todo.length===0){
      sno = 1;
    }
    else{
      sno = todo[todo.length-1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    settodo([...todo,mytodo]);
    console.log(mytodo);
  }
  function onDelete(a){
    console.log(a);
    // let ind = todo.indexOf(a);
    // todo.splice(ind, 1);
    // console.log(todo);
    settodo(todo.filter((b)=>{return b!==a}));
  }
  
  const [todo, settodo] = useState(itodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo])
  return (
    <div>
      <Router>
        <Header title = "Rupanjali's Todo-List"/>

        <Routes>
          <Route exact path="/" element = {
              <>
                <AddTodo add={onAdd}/>
                <Todos todo = {todo} onDelete={onDelete}/>
              </>
          }>
          </Route>
          <Route exact path="/about" element = {
              <>
              <About />
              </>
            }>
          </Route>
        </Routes>

        <Footer/>
      </Router>

    </div>
  );
}

export default App;
