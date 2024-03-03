"use client"
import React, { useState } from 'react';

const Formulario = ({ onAddMovimiento }) => {
    const [tipoMovimiento, setTipoMovimiento] = useState('Gasto');
    const [categoria, setCategoria] = useState('');
    const [monto, setMonto] = useState('');
    const [fecha, setFecha] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const movimiento = {
            id: Date.now(),
            tipoMovimiento,
            categoria,
            monto,
            fecha,
            descripcion,
        };
        onAddMovimiento(movimiento);
        setTipoMovimiento('Gasto');
        setCategoria('');
        setMonto('');
        setFecha('');
        setDescripcion('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Tipo de Proyecto:</label>
                <select value={tipoMovimiento} onChange={(e) => setTipoMovimiento(e.target.value)}>
                    <option value="Gasto">NO AMBIENTALES</option>
                    <option value="ambientales">AMBIENTALES</option>
                </select>
            </div>
            <div>
                <label>Categoría:</label>
                <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
            </div>
            <div>
                <label>Monto:</label>
                <input type="number" value={monto} onChange={(e) => setMonto(e.target.value)} />
            </div>
            <div>
                <label>Fecha:</label>
                <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
            </div>
            <div>
                <label>Descripción:</label>
                <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </div>
            <button type="submit">Registrar</button>
        </form>
    );
};

export default Formulario;
