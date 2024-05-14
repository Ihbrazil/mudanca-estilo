import React from 'react';
import estiloApp from './App.module.css';
import PaginaInicial from '../PaginaInicial';

export default function App() {
  return (
    <div className={estiloApp.App}>
      <PaginaInicial />
    </div>
  );
}