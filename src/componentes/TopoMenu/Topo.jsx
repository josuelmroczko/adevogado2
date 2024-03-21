import React, { useState, useEffect } from 'react';
import { StyledApresentacao, StyledTopo } from "./styleTopo";
import { data } from "../data";

export default function Topo() {
    const [topoVisible, setTopoVisible] = useState(false);
    const [apresentacaoVisible, setApresentacaoVisible] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        // Adiciona classe para tornar o topo visível com um pequeno atraso
        const topoTimer = setTimeout(() => {
            setTopoVisible(true);
        }, 200); // Ajuste o tempo conforme necessário

        // Adiciona classe para tornar a apresentação visível com um atraso maior
        const apresentacaoTimer = setTimeout(() => {
            setApresentacaoVisible(true);
        }, 200); // Ajuste o tempo conforme necessário

        // Adiciona um evento de rolagem para monitorar a posição de rolagem da página
        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(topoTimer);
            clearTimeout(apresentacaoTimer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Função para manipular a rolagem
    const handleScroll = () => {
        const currentPosition = window.pageYOffset;
        setScrollPosition(currentPosition);
    };

    return (
        <>
            <StyledTopo className={topoVisible && scrollPosition === 0 ? 'visible' : ''}>
                <ul>
                    <li><a href={data.topoMenu.linkInstagran} target="_blank"><img src={data.topoMenu.imagemInsta} alt="logoinstagran" /></a></li>
                    <li><a href={data.topoMenu.linkLinkedin} target="_blank"><img src={data.topoMenu.imagemLinkedin} alt="logoLinkedin" /></a></li>
                    <li><a href={data.topoMenu.linkYoutube} target="_blank"><img src={data.topoMenu.imagemYoutube} alt="logoYoutube" /></a></li>
                    <li><a href={data.topoMenu.linkfacebook} target="_blank"><img src={data.topoMenu.imagemfacebook} alt="logoFacebook" /></a></li>
                </ul>
                <ul>
                    <li><h3>{data.topoMenu.nomeTopo}</h3></li>
                    <li><a href={`tel:${data.topoMenu.telefone}`}> {data.topoMenu.telefone}</a></li>
                </ul>
            </StyledTopo>
            <StyledApresentacao className={apresentacaoVisible ? 'visible' : ''} backgroundImage={data.topoMenu.imagemFundo}>
                <h1>{data.topoMenu.textoPrincipalDaEmpresa}</h1>
                <p>{data.topoMenu.texto}</p>
            </StyledApresentacao>
        </>
    );
}
