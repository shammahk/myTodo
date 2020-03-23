import React from 'react';

// import logo from './logo.svg';
import './bootstrap.min.css';

import TodoList from './TodoList';



function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center">

  

      <TodoList />
      
      <style>
        {`
          .App {
            min-height : 100vh;
            background-color: #333333;
          }
        `}
      </style>
    </div>
  );
}

export default App;
