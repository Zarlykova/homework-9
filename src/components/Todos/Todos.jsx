
import React, { useState, } from 'react'
import { ACTIONS, useTodoContext } from '../../store/TodoContext'
import './Todos.css'




function Todos() {
    const {dispatchTodo} = useTodoContext()
    const [name, setName] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        dispatchTodo({type:ACTIONS.ADD_TODO, payload:{name:name}})
        setName('')
        localStorage.setItem("Todos", JSON.stringify(name))
    }
    // console.log(todos)



    return (
         <div className="todos">
            <div className='todos__content'>
              
                <div className="todos__forms">
                    <form className="todos__form" onSubmit={handleSubmit} >
                        <input  className="todos__input" value={name} placeholder="Add todo" onChange={e => setName(e.target.value)} />
                    </form>

                    <button className='todos__add__btn' onClick={handleSubmit}>
                        Создать
                    </button>

                </div>
               
        
            </div>
        </div> 
            
        
       
    )
}

export default Todos;