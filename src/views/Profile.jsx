import React from 'react'

const Profile = ({ user }) => {
    return (
        <div>
            <h1>Perfil de Usuario</h1>
            {user && user.name ? (
                <div>
                    <p><strong>Nombre:</strong> {user.name}</p>
                    <p><strong>Correo:</strong> {user.username}</p>
                </div>
            ) : (
                <p>No hay información de usuario disponible.</p>
            )}
        </div>
    )
}

export default Profile