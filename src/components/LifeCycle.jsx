import React, { useState, useEffect } from 'react';

const LifeCycle = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Componente Montado");

        return () => {
            console.log("Componente Desmontado");
        };
    }, []);

    useEffect(() => {
        if (count > 0) {
            console.log("Componente Actualizado, contador:", count);
        }
    }, [count]);

    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Incrementar
            </button>
        </div>
    );
};

export default LifeCycle;
