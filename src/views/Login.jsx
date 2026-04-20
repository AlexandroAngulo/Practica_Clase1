import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const handleOnSubmit = evt => {
    evt.preventDefault();
};


const Login = ({ setIsLogin, login }) => {
    const navigate = useNavigate();

    React.useEffect(() => {
        setIsLogin(false);
    }, [setIsLogin]);

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

    const handleOnClick = async (action) => {
        if (!state.correo || !state.contraseña) {
            alert("Por favor, completa todos los campos");
            return;
        }
        const res = await login({ correo: state.correo, contraseña: state.contraseña });
        if (res.isLogin == true){
            setIsLogin(true);
            navigate('/prof');
        } else {
            alert("Correo o contraseña incorrectos");
            return;
        }
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

