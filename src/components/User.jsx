import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const User = ({ user, delUser }) => {
    return (
        <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px' }}>{user._id}</td>
            <td style={{ padding: '10px' }}>{user.name}</td>
            <td style={{ padding: '10px' }}>
                <button 
                    onClick={() => delUser(user._id)}
                    style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default User;