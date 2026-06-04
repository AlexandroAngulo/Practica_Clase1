import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

const Details = ({ users }) => {
    const { username } = useParams();
    const [searchParams] = useSearchParams();

    const user = users.find(u => u.username === username);

    return (
        <div>
            <h1>Detalles del Usuario</h1>
            <p><strong>Username:</strong> {username}</p>
            {user ? (
                <div>
                    <p><strong>Nombre:</strong> {user.name}</p>
                </div>
            ) : (
                <p>Usuario no encontrado.</p>
            )}
            <p><strong>Valor del parámetro react:</strong> {searchParams.get("react")}</p>
        </div>
    );
};

export default Details;
