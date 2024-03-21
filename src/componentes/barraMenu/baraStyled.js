import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 50px;
  position: ${({ isSticky }) => (isSticky ? 'fixed' : 'absolute')};
  top: ${({ isSticky }) => (isSticky ? '0px' : '50px')};
  z-index: 1000;
  transition: top 0.3s, opacity 0.3s; /* Adiciona uma transição de 0.3 segundos para top e opacity */
  background-color: rgba(250, 250, 250, 0.5); /* Cor de fundo com transparência */
  box-shadow: ${({ isSticky }) => (isSticky ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none')};
  opacity: ${({ isSticky }) => (isSticky ? '1' : '0')}; /* Define a opacidade como 1 quando isSticky for verdadeiro */
  backdrop-filter: blur(10px); /* Adiciona um efeito de borrão ao fundo */

  @media (max-width: 768px) {
    position: fixed; /* Mantém a posição fixa em telas menores */
    top: ${({ isSticky }) => (isSticky ? ' 0px' : '50px')}; /* Ajusta a posição do topo apenas quando fixo */
    height: 50px; /* Altura da barra de navegação em telas menores */
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:space-evenly;
  align-items: center;

  button {
    background-color: blanchedalmond;
    padding: 10px;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    button {
      padding: 8px; /* Ajuste do padding do botão em telas menores */
    }
  }
`;

export const MenuItem = styled.div`
  cursor: pointer;
`;
