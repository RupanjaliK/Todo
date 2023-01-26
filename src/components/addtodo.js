import React, { useState } from 'react'

export default function Addtodo(props) {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    function additem(e){
        e.preventDefault();
        if(!title || !desc){
            alert("Title and/or Description cannot be empty.")
        }
        else{
            props.add(title, desc)
            settitle("");
            setdesc("");
        }
    }
    return (
        <div>
            <h2 className='text-center p-3'>Add a Todo</h2>
            <form className='container py-2 d-flex' onSubmit={additem}>
                <div className="mb-3" style={{marginRight: '40px'}}>
                    <label htmlFor="title" className="form-label"><h5>Title</h5></label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>{settitle(e.target.value)}} id="title" aria-describedby="title"/>
                </div>
                <div className="mb-3" style={{marginRight: '40px'}}>
                    <label htmlFor="desc" className="form-label"><h5>Description</h5></label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>{setdesc(e.target.value)}} id="desc" aria-describedby="desc"/>
                </div>
                <button type="submit" className="btn btn-success" style={{height:'37px', width:'75px', marginTop:'40px'}}>Add</button>
            </form>
        </div>
    )
}
