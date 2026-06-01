import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/Login'
import Profile from './views/Profile'
import Admin from './views/Admin'
import ResponsiveAppBar from './components/AppBar'
import { Container } from '@mui/material'
import { Details } from '@mui/icons-material'
import { useAuth } from './hooks/useAuth'
import { useAdmin } from './hooks/useAdmin'

function App() {
  const { isLogin, setIsLogin, token, user, setUser, login } = useAuth();
  const { users, getUsers, delUser, addUser } = useAdmin(token, isLogin);

  return (
    <>
      <BrowserRouter>
        {isLogin && <ResponsiveAppBar setIsLogin={setIsLogin} />}
        <Container sx={{ pt: '12px' }}>
          <Routes>
            <Route path="/" element={<Login setIsLogin={setIsLogin} setUser={setUser} login={login} />} />
            <Route path="/prof" element={<Profile user={user} />} />
            <Route path="/admin" element={<Admin users={users} delUser={delUser} addUser={addUser} getUsers={getUsers} />} />
            <Route path='/users/:username' element={<Details user={users} />} />
          </Routes> 
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App