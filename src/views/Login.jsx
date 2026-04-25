import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const handleOnSubmit = evt => {
    evt.preventDefault();
};


const Login = ({ setIsLogin, setUser, login }) => {
    const navigate = useNavigate();

    React.useEffect(() => {
        setIsLogin(false);
    }, [setIsLogin]);

    const [state, setState] = React.useState({
        username: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOnClick = async (action) => {
        if (!state.username || !state.password) {
            alert("Por favor, completa todos los campos");
            return;
        }
        const res = await login({ username: state.username, password: state.password });
        if (res.isLogin == true){
            setIsLogin(true);
            setUser(res.user || {});
            navigate('/prof');
        } else {
            alert("Usuario o contraseña incorrectos");
            return;
        }
    }

    return (
        <div> 
            <h2>Iniciar sesión</h2>
            <div style={{ width: '400px', margin: '0 auto' }}>
                <form onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        name="username"
                        value={state.username}
                        onChange={handleChange}
                        placeholder="usuario o correo"
                    />
                    <input
                        type="password"
                        name="password"
                        value={state.password}
                        onChange={handleChange}
                        placeholder="contraseña"
                    />
                    <br />
                    <button
                        id="signIn"
                        onClick={() => handleOnClick("signIn")}
                    >   
                        Inicia sesión
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login

