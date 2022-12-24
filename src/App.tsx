import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/mainlayout';
import HomePage from './pages/home/homepage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
