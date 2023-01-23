// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './MyComponents/Header'; //Brackets not put since the export function is default not named
// import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
// import {AddTodo} from './MyComponents/AddTodo';
import {About} from './MyComponents/About';
import {Home} from './MyComponents/Home';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = []
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc) => {
    setTodos(todos.concat({
      sno: todos.length>0 ? todos[todos.length-1].sno + 1 : 1,
      title: title,
      desc: desc 
    }))

    
    
    
    
  }
  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <>
    <Router>
      <Header title={"My Todos List"} searchBar={false}/>
      <Routes>
        <Route exact path="/" element = {<Home addTodo = {addTodo} todos={todos} onDelete={onDelete}/>}/>

        <Route exact path="/about" element={<About/>}/>
          
      </Routes>
      
      <Footer/>
    </Router>
    </>
    
  );
}

export default App;
