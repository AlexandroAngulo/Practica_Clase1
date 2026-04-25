import React from 'react'
import { TextField } from '@mui/material'

const Add = ({addUser}) => {
    const [name, setName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onsubmit = (e) => {
        e.preventDefault();
        if (!name || !username || !password) {
            alert("Por favor, completa todos los campos");
            return
        }
        addUser({name, username, password});
        setName('');
        setUsername('');
        setPassword('');
    }
    return (
        <form onSubmit={onsubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            <TextField size="small" value={name} onChange={(e) => setName(e.target.value)} label="Nombre" variant="outlined" />
            <TextField size="small" value={username} onChange={(e) => setUsername(e.target.value)} label="Correo" variant="outlined" />
            <TextField size="small" value={password} onChange={(e) => setPassword(e.target.value)} label="Contraseña" variant="outlined" type="password" />
            <button 
                type="submit"
                style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', height: '40px' }}
            >
                Agregar Usuario
            </button>
        </form>
    )
}

export default Add;