import { useState, useEffect } from 'react';

const API_URL = "https://api-66-production.up.railway.app";

export const useAdmin = (token, isLogin) => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        if (!token) return;
        try {
            const res = await fetch(`${API_URL}/users`, {
                headers: { authorization: token }
            });
            const data = await res.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        if (isLogin) {
            getUsers();
        }
    }, [isLogin, token]);

    const delUser = async (id) => {
        try {
            setUsers(users.filter((u) => u._id !== id));
            await fetch(API_URL + '/users/' + id, { 
                headers: { authorization: token }, 
                method: 'DELETE' 
            });
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const addUser = async (newUser) => {
        try {
            const response = await fetch(`${API_URL}/users`, {
                method: 'POST',
                headers: { "content-type": "application/json", authorization: token },
                body: JSON.stringify(newUser)
            });
            const data = await response.json();
            setUsers([...users, data]);
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };

    return { users, getUsers, delUser, addUser };
};

export default useAdmin;
