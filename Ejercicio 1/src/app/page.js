"use client"// src/App.js
import React, { useState } from 'react';
import Formulario from '../components/reg';
import TarjetaMovimientos from '../components/movs';
import ContenedorTotal from'../components/tot';

const App = () => {
  const [movimientos, setMovimientos] = useState([]);

  const addMovimiento = (movimiento) => {
    setMovimientos([...movimientos, movimiento]);
  };

  const deleteMovimiento = (id) => {
    const updatedMovimientos = movimientos.filter((movimiento) => movimiento.id !== id);
    setMovimientos(updatedMovimientos);
  };

  const ambientales = movimientos.filter((m) => m.tipoMovimiento === 'ambientales');
  const gastos = movimientos.filter((m) => m.tipoMovimiento === 'Gasto');

  return (
    <div>
      <Formulario onAddMovimiento={addMovimiento} />
      <div style={{ display: 'flex' }}>
        <TarjetaMovimientos tipo="NO AMBIENTALES" movimientos={gastos} onDeleteMovimiento={deleteMovimiento} />
        <TarjetaMovimientos tipo="AMBIENTALES" movimientos={ambientales} onDeleteMovimiento={deleteMovimiento} />
        <ContenedorTotal ambientales={ambientales} gastos={gastos} />
      </div>
    </div>
  );
};

export default App;

