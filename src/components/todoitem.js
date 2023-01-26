import React from 'react'

export default function todoitem(props) {
  return (
    <div className="card mb-3">
      <div className="card-body align-items-center justify-content-center">
        {/* <h5 className="card-title">{props.todoi.sno}</h5> */}
        <h5 className="card-title">{props.todoi.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.todoi.desc}</h6>
        <button type="button" className="btn btn-danger" onClick={()=>{props.del(props.todoi)}}>Delete</button>
      </div>
    </div>
  )
}
