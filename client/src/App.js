import React from 'react';
import Home from './pages/home/Home';
import Login from './pages/user/Login';
import Register from './pages/user/Register';
import Landing from './pages/loginLanding/LoginLanding';
import { Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/landing" element={<Landing/>} />
        </Routes>
    );
}

export default App;
