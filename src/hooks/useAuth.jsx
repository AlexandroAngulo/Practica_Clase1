import { useState } from 'react';

const API_URL = "https://api-66-production.up.railway.app";

export const useAuth = () => {
    const [isLogin, setIsLogin] = useState(() => {
        const saved = localStorage.getItem('isLogin');
        return saved ? JSON.parse(saved) : false;
    });
    const [user, setUser] = useState({});
    const [token, setToken] = useState("");

    const login = async (userData) => {
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify(userData)
            });
            const result = await response.json();
            if (result.token) {
                setToken(result.token);
                return { ...result, isLogin: true };
            }
            return { isLogin: false };
        } catch (error) {
            console.error("Error during login:", error);
            return { isLogin: false, error };
        }
    };

    return { isLogin, setIsLogin, user, setUser, token, setToken, login };
};

export default useAuth;
