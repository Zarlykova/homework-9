import React from 'react'
import './Todo.css'
import { ACTIONS, useTodoContext } from '../../store/TodoContext'

function Todo({ todo, id }) {
    const {dispatchTodo} = useTodoContext()

const removeItemHandler = () => {
  dispatchTodo({ type: ACTIONS.DELETE_TODO, payload: {id:todo.id}})
}
const completedItemHandler = () => {
  dispatchTodo({ type:  ACTIONS.TOGGLE_TODO, payload: {id:todo.id}})
}  
    return (
        <div className="todo" >
            <div style={{color : todo.complete ? " orange" : "#030303"}} className="todo__title">{todo.name}</div>
            <div className="todo__buttons">
                <button className="todo__toggle" onClick= {completedItemHandler}>
                   Выполнено
                </button>
                <button className="todo__delete"onClick= {removeItemHandler}>
                    Удалить
                </button>

            </div>

            

            
        </div>
    )
}

export default Todo;