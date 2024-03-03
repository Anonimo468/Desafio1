"use client"
import React from 'react';

const ContenedorTotal = ({ ambientales, gastos }) => {
    const calcularTotal = (movimientos) => {
        return movimientos.reduce((total, movimiento) => total + parseFloat(movimiento.monto), 0).toFixed(2);
    };

    return (
        <div>
            <h2>Total General</h2>
            <p>ABIENTALES: ${calcularTotal(ambientales)}</p>
            <p>NO AMBIENTALES: ${calcularTotal(gastos)}</p>
            <p>Balance: ${calcularTotal(ambientales) - calcularTotal(gastos)}</p>
        </div>
    );
};

export default ContenedorTotal;
