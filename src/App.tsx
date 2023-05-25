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

  const addTask = (): void => {
    const inputValue: string = document.querySelector('input')!.value;
    if (inputValue.length !== 0) {
      const tasksCopy: ITask[] = [...tasks];
      tasksCopy.unshift({task: inputValue,  taskClassName: '', id: nanoid()});
      console.log(tasksCopy);
      setTasks(tasksCopy);
    } else {
      alert('Задача не может быть пустой');
    }
  };

  const removeTask = (index: number): void => {
    const tasksCopy: ITask[] = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  };

  const taskExecution = (index: number): void => {
    const tasksCopy: ITask[] = [...tasks];
    tasksCopy[index].taskClassName = 'completed-task';
    setTasks(tasksCopy);
  };

  return (
    <div className="App">
      <form>
          <input placeholder="Add new task" type="text"/>
          <button onClick={addTask} type="button" className="btn-add">Add</button>
      </form>

        <ul>
          {
            tasks.map((task: ITask, index: number) => {
              return <Task
                key={task.id}
                addClass={task.taskClassName}
                addClassOnClickHandler={() => taskExecution(index)}
                onClickHandler={() => removeTask(index)}
                taskName={task.task}/>
            })
          }
        </ul>
    </div>
  );
};

export default App;