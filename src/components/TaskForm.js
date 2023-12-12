// TaskForm.js
import React, { useState } from 'react';
import { createTask } from '../services/TaskService';
import { useNavigate } from 'react-router-dom';
import '../css/TaskForm.css'; 

const TaskForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [opinion, setOpinion] = useState('');
  const navigate = useNavigate();

  const handleCreateTask = (e) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !opinion.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    createTask({
      firstName,
      lastName,
      opinion,
    })
      .then(() => {
        navigate('/');
        alert('The task has been created');
      })
      .catch(() => alert('The task was not created'));
  };

  return (
    <div className="task-form-container">
      <div className="task-form-header">
        <h1>Create Task</h1>
      </div>
      <form onSubmit={handleCreateTask} className="task-form">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Opinion</label>
          <textarea
            value={opinion}
            onChange={(e) => setOpinion(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
