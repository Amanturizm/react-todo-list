import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
          <input placeholder="Add new task" type="text"/>
          <button type="button" className="btn-add">Add</button>
      </form>
    </div>
  );
}

export default App;
