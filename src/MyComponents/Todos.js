import React from 'react';
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  return (
<<<<<<< HEAD
    <div>
      <Todos  />  
    </div>
=======
    <div className='conatainer'>
      <h3 className='text-center'>Todos List</h3>
      {props.todos.length===0? "No Todos to Display":
      props.todos.map((todo)=>
        {
          return <TodoItem todo={todo} key={todo.Srno} onDelete={props.onDelete} />
        })
      } 
      
      

      </div>
>>>>>>> e3b27aecfcd13e6dd3adbcab50a2b51d865ff6b6
  )
}



