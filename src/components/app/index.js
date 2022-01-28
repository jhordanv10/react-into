import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../../TodoContext';


//const defaultTodos = [
//  { text: 'Levantarse temprano', completed: false },
//  { text: 'Ir al gimnasio', completed: false },
//  { text: 'Comer saludable', completed: true },
//  { text: 'Estudiar mucho', completed: false },
//]



function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
