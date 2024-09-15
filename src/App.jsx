import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import { PropertyListing } from './Pages/PropertyListing';
import Login from './Pages/Login'
import Register from './Pages/Register';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/search' element={<PropertyListing/>} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path='/home' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
    </>
  );
}

export default App;
