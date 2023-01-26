import React from 'react'
import TodoItem from './todoitem'

export default function todos(props) {
  return (
    <div className="container" style={{minHeight:'55vh'}}>
      <h2 className='text-center p-3'>Todos</h2>
      <div style={{ padding: '0px 0px 40px 0px' }}>
        {props.todo.length !== 0 ?
          props.todo.map((x) => {
            return <TodoItem todoi={x} del={props.onDelete} />
          }) : "Congratulations! Todo List is Empty."
        }
      </div>
    </div>
  )
}
