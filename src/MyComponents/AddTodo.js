import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const submit = (e) => {  
        e.preventDefault();
        if(!title || !description){
            alert("Title or Description cannot be blank");
        }
        props.addTodo(title, description);
    }
    return (
        <div>
            <form className='container my-3 p-3' onSubmit={submit}>
                <div className="col-md-6 mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} name='title' className="form-control" id="title" placeholder='Title' />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> 
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label">Todo Decription</label>
                    <textarea name="description" value={description} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="" cols="30" rows="10"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </div>
    )
}
