// Favorites.js
import React, { useState, useEffect } from 'react';
import { FaHeartBroken } from 'react-icons/fa';
import TaskList from './TaskList';

const Favorites = () => {
  const [favoriteTasks, setFavoriteTasks] = useState([]);

  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteTasks(favoritesFromStorage);
  }, []);

  const handleRemoveFavorite = (taskId) => {
    // Elimină task-ul favorit din listă
    const updatedFavorites = favoriteTasks.filter((task) => task.id !== taskId);
    setFavoriteTasks(updatedFavorites);

    // Actualizează LocalStorage
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }; 

  return (
    <div>
      <h2>Favorites</h2>
      {/* Afișează lista de task-uri favorite */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {favoriteTasks.map((task) => (
          <li key={task.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
            {/* Afișează detaliile task-ului */}
            <p>{`${task.firstName} ${task.lastName}`}</p>
            {/* Butonul de ștergere cu pictograma inimii rupte */}
            <button
              onClick={() => handleRemoveFavorite(task.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <FaHeartBroken style={{ color: 'red', fontSize: '1.5em' }} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;

