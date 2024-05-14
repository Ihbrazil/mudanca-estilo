import React, { useState } from 'react';
import estiloPaginaInicial from './PaginaInicial.module.css';

export default function PaginaInicial() {
    
    const corDeFundoVermelho = 'bg-vermelho';
    const corDeFundoAzul = 'bg-azul';
    
    const [ novaCor, setNovaCor ] = useState(corDeFundoVermelho);
    const [estiloAtualizado, setEstiloAtualizado] = useState(true);

    const alterarCor = () => {
        if (estiloAtualizado === true) {
            setEstiloAtualizado(false);
            setNovaCor(corDeFundoAzul);
        } else {
            setEstiloAtualizado(true);
            setNovaCor(corDeFundoVermelho);
        }
    }

           return (
        <div className={estiloPaginaInicial.display}>
          <div className={estiloPaginaInicial.container}>
            <h1>Alterar cor de fundo:</h1>
            <div className={novaCor}></div>
            <p>Clique no botão abaixo para alterar a cor da caixa.</p>
            <button onClick={alterarCor} className={estiloPaginaInicial.botao}>Clique aqui</button>
          </div>
        </div>
      );
}