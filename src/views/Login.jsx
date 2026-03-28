import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const handleOnSubmit = evt => {
    evt.preventDefault();
};


const Login = ({ setIsLogin }) => {
    const navigate = useNavigate();
    setIsLogin(false);
    const [state, setState] = React.useState({
        correo: '',
        contraseña: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOnClick = (action) => {
        if (!state.correo || !state.contraseña) {
            alert("Por favor, completa todos los campos");
            return;
        }
        setIsLogin(true);
        navigate('/prof');
    }

    return (
        <div> 
            <h2>Iniciar sesión</h2>
            <div style={{ width: '400px', margin: '0 auto' }}>
                <form onSubmit={handleOnSubmit}>
                    <input
                        type="correo"
                        name="correo"
                        value={state.correo}
                        onChange={handleChange}
                        placeholder="correo"
                    />
                    <input
                        type="contraseña"
                        name="contraseña"
                        value={state.contraseña}
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

