// SingleTaskPage.js
import React, { useState, useEffect } from 'react';
import { getTaskById, deleteTask } from '../services/TaskService';
import { useParams, Link, useNavigate } from 'react-router-dom';

const SingleTaskPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getTaskById(id)
      .then((data) => setTask(data))
      .catch((error) => console.error('Error fetching task:', error));
  }, [id]);

  const handleDeleteTask = () => {
    // Handle task deletion logic here
    deleteTask(id)
      .then(() => {
        alert('Task deleted successfully');
        navigate('/');
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  if (!task) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.5em', color: '#333', marginBottom: '15px' }}>Task Details</h2>
      <div style={{ marginBottom: '20px' }}>
        <strong>ID:</strong> {task.id}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <strong>First Name:</strong> {task.firstName}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <strong>Last Name:</strong> {task.lastName}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <strong>Opinion:</strong> {task.opinion}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <strong>Created At:</strong> {new Date(task.createdAt).toLocaleString()}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={handleDeleteTask}>Delete Task</button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/">Back to Task List</Link>
      </div>
    </div>
  );
};

export default SingleTaskPage;
