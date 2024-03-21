import styled from 'styled-components';
import { data } from '../data';

export const StyledTopo = styled.div`
    display: flex;
    position: fixed;
    z-index: 4;
    width: 100%;
    height: 100px;
    justify-content: space-evenly;
    flex-direction: row-reverse;
    background-color: ${data.topoMenu.corFundoOpcoesTopo};
    opacity: 0; /* Inicialmente torna o topo invisível */
    transition: opacity 1s ease; /* Adiciona uma transição suave de 1 segundo para a propriedade de opacidade */

    ul {
        list-style: none;
        display: flex;  
        flex-wrap: nowrap;
        align-items: center;
      
        li {
            margin-right:  10px;
            padding-left: 10px;
            padding: 10px;
            color: ${data.topoMenu.corTexto};

            img {
                width: 20px;
                align-items: center;
            }

            h3 {
                font-size: 1.5rem;
            }
        }
    }
   

    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
        height: auto;
        padding: 0px;

        ul {
            align-items: flex-start;
             

            li {
                margin-right: 0;
                padding-left: 5px;
                margin-bottom: 5px;
            }
        }

        img {
            width: 20px;
        }
    }

    &.visible {
        opacity: 1;
    }
`;

export const StyledApresentacao = styled.div`
    text-align: center;
    display: flex;
    padding: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: start;
    padding-left: 30px;
    height: 100vh;
    background: url(${props => props.backgroundImage}) no-repeat center center;
    background-size: cover;
    background-position: right; /* Alteração: Definindo a posição da imagem para a direita */
    position: relative;
    opacity: 0; /* Inicialmente torna o topo invisível */
    transition: opacity 1s ease;  /* Adiciona uma transição suave de 1 segundo para a propriedade de opacidade */

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1;
    }

    h1 {
        font-size: 2.5rem;
        margin-top: 0;
        z-index: 2;
        position: relative;
        left: 0px;
        font-family: "Cormorant", serif;
        font-weight: bolder;
        color: ${data.topoMenu.corTexto};
        transition: color 1s ease;
        width: 50%;
    }

    p {
        font-size: 18px;
        font-weight: 100;
        color: ${data.topoMenu.corTexto};
        margin-bottom: 20px;
        z-index: 2;
        position: relative;
    }

    button {
        padding: 10px 20px;
        background-color: ${data.topoMenu.corBotaoFundo};
        color: ${data.topoMenu.corTexto};
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
        z-index: 2;
        position: relative;

        &:hover {
            background-color: ${data.topoMenu.corBotaoHover};
        }
    }

    &.visible {
        opacity: 1;
    }
`;
