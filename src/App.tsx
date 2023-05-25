import React, { useState } from 'react';
import './App.css';
import Task from './Task/Task';
import { nanoid } from 'nanoid';

interface ITask {
  task: string;
  taskClassName: string;
  id: string;
};

const App = () => {
  const defaultTasks: ITask[] = [
    {task: 'Buy milk', taskClassName: '', id: nanoid()},
    {task: 'Walk with dog', taskClassName: '', id: nanoid()},
    {task: 'Do homework', taskClassName: '', id: nanoid()}
  ];
  const [tasks, setTasks] = useState<ITask[]>(defaultTasks);

  return (
    <div className="App">
      <form>
          <input placeholder="Add new task" type="text"/>
          <button type="button" className="btn-add">Add</button>
      </form>

      <ul>
          {
            tasks.map((task: ITask, index: number) => {
              return <Task
                key={task.id}
                addClass={task.taskClassName}
                taskName={task.task}/>
            })
          }
        </ul>
    </div>
  );
}

export default App;
