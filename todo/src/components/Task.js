import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

library.add(faEdit, faTrashAlt);

const Task = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodo = e => {
    setNewTodo(e.target.value);
  };

  const clearDone = () => {
    // console.log('clearDone');
    dispatch({type: 'CLEAR_DONE'})
    // console.log('state in task: ', state);
    // console.log('state.length in task: ', state && state.length);
  };

  return (
    <>
      <div className="Input">
        <input
          className="task-input"
          type="text"
          name="newToDoItem"
          value={newTodo}
          onChange={handleNewTodo}
        />
        <button onClick={()=>{
          if (newTodo !== '') {
            dispatch({type: 'ADD_TASK', payload: newTodo})
            setNewTodo('');
          }
        }}>Add&nbsp;Task</button>
      </div>
      <div className="Tasks">
        {state && state.map && state.map((task) => {
          return (
            <div className="Task-Item" key={task.id}>
              <p className={task.completed ? "Task-Completed" : "Task"}>
                <input
                  type="checkbox"
                  name="completed"
                  value={task.completed}
                  onClick={() => dispatch({type:'TOGGLE_COMPLETED', payload: task.id})}
                />
                {task.item}
                &nbsp;
                <FontAwesomeIcon
                  icon={faEdit}
                  className="icon"
                  onClick={() => {
                    setNewTodo(task.item);
                    dispatch({type:'REMOVE_TASK', payload: task.id});
                  }}
                />
                &nbsp;
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="icon"
                  onClick={() => {
                    dispatch({type:'REMOVE_TASK', payload: task.id});
                  }}
                />
              </p>
            </div>
            )
        })}
      </div>
      <div className="Clear" onClick={clearDone}>
        <button>
          <FontAwesomeIcon icon={faTrashAlt} className="icon"/>
          &nbsp;
          Clear&nbsp;Done
        </button>
      </div>
    </>
  );
};

export default Task;