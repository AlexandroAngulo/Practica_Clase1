import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/Login'
import Profile from './views/Profile'
import Photos from './views/Photos'
import ResponsiveAppBar from './components/AppBar'
import { Container } from '@mui/material'

function App() {
  const [isLogin, setIsLogin] = useState(() => {
    const saved = localStorage.getItem('isLogin');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('isLogin', JSON.stringify(isLogin));
  }, [isLogin]);

  return (
    <>
    <BrowserRouter>
      {isLogin &&<ResponsiveAppBar /> }
      <Container sx={{ pt: '12px'}}>
        <Routes>
          <Route path="/" element={<Login setIsLogin={setIsLogin} />} />
          <Route path="/prof" element={<Profile />} />
          <Route path="/photos" element={<Photos />} />
        </Routes> 
      </Container>
    </BrowserRouter>
    </>
  )
}

export default App
