import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/Login'
import Profile from './views/Profile'
import Photos from './views/Photos'
import ResponsiveAppBar from './components/AppBar'
import { Container } from '@mui/material'

const API_URL = "HTTP://LOCALHOST:3000";

function App() {
  const [isLogin, setIsLogin] = useState(() => {
    const saved = localStorage.getItem('isLogin');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('isLogin', JSON.stringify(isLogin));
  }, [isLogin]);

  const login = async (userData) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers:{"content-type": "application/json"},
        body:JSON.stringify(userData)
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  };

  return (
    <>
    <BrowserRouter>
      {isLogin &&<ResponsiveAppBar /> }
      <Container sx={{ pt: '12px'}}>
        <Routes>
          <Route path="/" element={<Login setIsLogin={setIsLogin} login={login} />} />
          <Route path="/prof" element={<Profile />} />
          <Route path="/photos" element={<Photos />} />
        </Routes> 
      </Container>
    </BrowserRouter>
    </>
  )
}

export default App
