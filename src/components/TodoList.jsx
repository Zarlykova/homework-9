import React from 'react'
import styled from 'styled-components'
import { useTodoContext } from '../store/TodoContext'
import Todo from './Todo/Todo'



export const TodoList = () => {
  const {todos} = useTodoContext()

  return (
    <ListStyled>
      {
        todos.map((item, id,) => (
        <Todo
          key={id}
          todo={item}
          index={id}
           />
        ))
      }
    </ListStyled>
  )
}
const ListStyled = styled.ul` 
 list-style: none;
 height: 45vh;
 margin-left: 33rem;
 margin-top: 8rem;

`