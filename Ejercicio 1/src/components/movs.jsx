"use client"
import React from 'react';

const TarjetaMovimientos = ({ tipo, movimientos, onDeleteMovimiento }) => {
    const calcularTotal = () => {
        return movimientos.reduce((total, movimiento) => total + parseFloat(movimiento.monto), 0).toFixed(2);
    };

    return (
        <div>
            <h2>{tipo}</h2>
            <ul>
                {movimientos.map((movimiento) => (
                    <li key={movimiento.id}>
                        <p>{movimiento.descripcion} - ${movimiento.monto}</p>
                        <button onClick={() => onDeleteMovimiento(movimiento.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${calcularTotal()}</p>
        </div>
    );
};

export default TarjetaMovimientos;
