// TaskBlock.js
import React from 'react';
import { deleteTask } from '../services/TaskService';

const TaskBlock = ({ task, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id)
        .then(() => {
          onDelete(task.id);
        })
        .catch((error) => {
          console.error('Error deleting task:', error);
        });
    }
  };

  return (
    <div className="task-block">
      <p>
        <strong>First Name:</strong> {task.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {task.lastName}
      </p>
      <p>
        <strong>Opinion:</strong> {task.opinion}
      </p>
      {/* You can include other information here if needed */}
      
      <div>
        <button onClick={handleDelete} style={{ marginRight: '10px', background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
          Delete
        </button>
        {task.completed && <span style={{ color: 'green', fontWeight: 'bold' }}>Completed</span>}
      </div>
    </div>
  );
};

export default TaskBlock;
