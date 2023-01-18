// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './MyComponents/Header'; //Brackets not put since the export function is default not named
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import {AddTodo} from './MyComponents/AddTodo';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (title, desc) => {
    setTodos(todos.concat({
      sno: todos.length>0 ? todos[todos.length-1].sno + 1 : 1,
      title: title,
      desc: desc 
    }))
  }
  const [todos, setTodos] = useState([
    {
      sno:1,
      title: "Go to market",
      desc: "Go to market to get job done"
    },
    {
      sno:2,
      title: "Go to mall",
      desc: "Go to mall to get job done"
    },
    {
      sno:3,
      title: "Go to shop",
      desc: "Go to shop to get job done"
    }
  ])
  return (
    <>
      <Header title={"My Todos List"} searchBar={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
    
  );
}

export default App;
