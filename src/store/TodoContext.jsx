import { createContext, useContext, useReducer } from "react"
const TodoContext = createContext()


const initState = [{
    id: new Date(), title: "Book", complete: false
   } ]

export const ACTIONS ={
    ADD_TODO:'add_todo',
    TOGGLE_TODO:'toggle_todo',
    DELETE_TODO:'delete_todo'
}

function reducer(todos, action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return[...todos, newTodo(action.payload.name)]
        
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo=>{
                if(todo.id === action.payload.id){
                    return{...todo, complete: !todo.complete}
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo=> todo.id !== action.payload.id)   
            
        default:
           return todos    
    }
       

}

function newTodo(name){
    return{id:Date.now(), name:name, complete:false }
}

export const TodoProvider = ({children}) => {
    const [todos, dispatchTodo] = useReducer(reducer, initState)
    
    
    const valueTodos = {
     dispatchTodo, 
     todos
    }
     return <TodoContext.Provider value={valueTodos}>{children}</TodoContext.Provider>
    };
    
    export const useTodoContext = () => useContext(TodoContext)