
import './App.css';
import { TodoList } from './components/TodoList';
import Todos from './components/Todos/Todos';
import { TodoProvider } from './store/TodoContext';


function App() {
  return (
    <div className='app' >
     <TodoProvider>
      <Todos/>
      <TodoList/>
     </TodoProvider>
        
  
        
     
        
      
       
    </div>
  );
}

export default App;
