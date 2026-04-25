import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import Add from '../components/Add';
import User from '../components/User';


const Admin = ({ users, delUser, addUser, getUsers }) => {
  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
        <h1>Administración de Usuarios</h1>
        <Add addUser={addUser} />
        <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
            <thead>
                <tr style={{ borderBottom: '1px solid #ccc' }}>
                    <th style={{ textAlign: 'left', padding: '10px' }}>Id</th>
                    <th style={{ textAlign: 'left', padding: '10px' }}>Name</th>
                    <th style={{ textAlign: 'left', padding: '10px' }}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {users.map((u) => (<User key={u._id} user={u} delUser={delUser} />))}            
            </tbody>
        </table>
    </div>
  );
};

export default Admin;