// TaskList.js
import React, { useState, useEffect } from 'react';
import { getAllTasks, deleteTask } from '../services/TaskService';
import TaskBlock from './TaskBlock';
import Skeleton from '../services/Skeleton';

// Hook pentru debouncing
const useDebouncedValue = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 500);

  useEffect(() => {
    // Simulează o întârziere pentru a arăta efectul de încărcare
    const delay = setTimeout(() => {
      getAllTasks()
        .then((data) => {
          setTasks(data);
          setLoading(false);
        })
        .catch((error) => console.error('Error fetching tasks:', error));
    }, 1500);

    return () => clearTimeout(delay);
  }, []);

  const handleDeleteTask = (taskId) => {
    // Actualizează lista de sarcini după ștergere
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddToFavorite = (task) => {
    // Afișează un mesaj de confirmare pentru a verifica intenția utilizatorului
    const confirmAdd = window.confirm('Adăugați acest task în Favorite?');

    if (confirmAdd) {
      const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
      const updatedFavorites = [...favoritesFromStorage, task];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };
  // Filtru de căutare în funcție de numele de familie
  const filteredTasks = tasks.filter((task) => {
    const fullName = `${task.firstName} ${task.lastName}`.toLowerCase();
    return fullName.includes(debouncedSearchTerm.toLowerCase());
  });

  // Funcție pentru a sorta sarcinile în funcție de nume
  const sortTasksByName = (tasks, order) => {
    const sortedTasks = [...tasks].sort((a, b) => {
      const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
      const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
      return order === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    return sortedTasks;
  };

  const sortedTasks = sortTasksByName(filteredTasks, sortOrder);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.5em', color: '#333', marginBottom: '15px' }}>Task List</h2>

      <div style={{ marginBottom: '15px', textAlign: 'right' }}>
        {/* Căutare cu debounce */}
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Buton pentru schimbarea ordinei de sortare */}
        <button onClick={() => setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'))}>
          Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
        </button>
      </div>

      {loading ? (
        // Afișează Skeleton când se încarcă datele de pe server
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : sortedTasks.length === 0 ? (
        // Mesaj pentru cazul în care nu există sarcini
        <p style={{ textAlign: 'center', fontSize: '1.2em' }}>No tasks found</p>
      ) : (
        // Afișează sarcinile filtrate și sortate
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {sortedTasks.map((task) => (
            <li key={task.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
              {/* Utilizează componenta TaskBlock pentru a afișa detaliile sarcinii */}
              <TaskBlock task={task} onDelete={handleDeleteTask} />
              <button onClick={() => handleAddToFavorite(task)}>Adaugă în Favorite</button>
</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
