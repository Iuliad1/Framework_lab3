// TaskService.js
import axios from 'axios';

const http = axios.create({
  baseURL: 'https://65776729197926adf62e3af5.mockapi.io/tasks/api/'
});

const getAllTasks = async () => {
  try {
    const response = await http.get('tasks');
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

const getTaskById = async (id) => {
  try {
    const response = await http.get(`tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching task by ID:', error);
    throw error;
  }
};

const deleteTask = async (id) => {
  try {
    const response = await http.delete(`tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};

const createTask = async (data) => {
  try {
    const response = await http.post('tasks', data);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export {
  getAllTasks,
  getTaskById,
  deleteTask,
  createTask
};
