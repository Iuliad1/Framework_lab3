// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import SingleTask from './components/SingleTask';
import Favorites from './components/Favorites';


function App() {
  return (
    <Router> 
      <div>
        <Header />
        <Routes>
        <Route path={'/'} element={<TaskList/>}/>
        <Route path={'/create-task'} element={<TaskForm/>}/>
        <Route path={'/task/:id'} element={<SingleTask />} />
        <Route path={'/saved'} element={<Favorites/>}/>
        </Routes>
       <Footer/>
      </div>
      </Router>
  );
};

export default App;
