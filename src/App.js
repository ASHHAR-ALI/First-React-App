import './App.css';
import Navbar from "./MyComponents/Navbar";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import Footer from "./MyComponents/Footer";
import React, { useState } from 'react';

function App() {

  const onDelete = (todo) => {
    console.log("I am on Delete of Todo", todo);

    // Deleting is not work in thid way
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1)

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (title, description) => {
    console.log("I am Adding this todo", title,description);
    let Srno = todos[todos.length-1].Srno + 1;
    const myTodo = {
      Srno: Srno,
      title: title,
      description: description,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }



  const [todos, setTodos] = useState([
    {
      Srno: 1,
      title: "Go to the market",
      description: "You need to go to the market in time"
    },
    {
      Srno: 2,
      title: "Go to the market",
      description: "You need to go to the Mall in time"
    },
    {
      Srno: 3,
      title: "Go to the market",
      description: "You need to go to the Mandi in time"
    },
  ]);
  return (
    <>
      <Navbar title="Header" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>);
}

export default App;
