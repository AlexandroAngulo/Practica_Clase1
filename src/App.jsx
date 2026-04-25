import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/Login'
import Profile from './views/Profile'
import Admin from './views/Admin'
import ResponsiveAppBar from './components/AppBar'
import { Container } from '@mui/material'

const API_URL = "http://localhost:8000";

function App() {
  const [isLogin, setIsLogin] = useState(() => {
    const saved = localStorage.getItem('isLogin');
    return saved ? JSON.parse(saved) : false;
  });
  useEffect(() => {
    localStorage.setItem('isLogin', JSON.stringify(isLogin));
  }, [isLogin]);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const res = await fetch(`${API_URL}/users`);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  useEffect(() => {
    if(isLogin){
      getUsers();
    }
  }, [isLogin]);

  const login = async (userData) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData)
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  };

  const delUser = async (id) => {
    setUsers(users.filter((u) => u._id !== id));
    await fetch(API_URL + '/users/' + id, { method: 'DELETE' });
  };
  const addUser = async (newUser) => {
    try {
      const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newUser)
      });
      const data = await response.json();
      setUsers([...users, data]);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };
  return (
    <>
      <BrowserRouter>
        {isLogin && <ResponsiveAppBar setIsLogin={setIsLogin} />}
        <Container sx={{ pt: '12px' }}>
          <Routes>
            <Route path="/" element={<Login setIsLogin={setIsLogin} setUser={setUser} login={login} />} />
            <Route path="/prof" element={<Profile user={user} />} />
            <Route path="/admin" element={<Admin users={users} delUser={delUser} addUser={addUser} getUsers={getUsers} />} />
          </Routes> 
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App