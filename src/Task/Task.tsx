import React from 'react';
import './Task.css';
import bucket from '../bucket.png';
import complete from '../complete.png';

interface ITaskProps extends React.PropsWithChildren {
  taskName: string;
  addClass: string;
  onClickHandler: React.MouseEventHandler;
  addClassOnClickHandler: React.MouseEventHandler;
};

const Task: React.FC<ITaskProps> = props => {
  return (
    <li className={`task ${props.addClass}`}>
      <h4>{props.taskName}</h4>
      <div>
        <button onClick={props.addClassOnClickHandler} type="button">
          <img src={complete} alt="complete"/>
        </button>
        <button onClick={props.onClickHandler} type="button">
          <img src={bucket} alt="bucket"/>
        </button>
      </div>
    </li>
  );
};

export default Task;