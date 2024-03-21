import styled from "styled-components";

export const StyledLocal = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  width: 100%;

  iframe {
    width: 50%;
    height: 400px;
    margin-bottom: 50px;
    border-radius: 50px;

    @media (max-width: 768px) {
      width: 80%; /* Ajuste para telas menores */
      height: 300px; /* Ajuste para telas menores */
    }

    @media (max-width: 480px) {
      width: 90%; /* Ajuste para telas ainda menores */
      height: 200px; /* Ajuste para telas ainda menores */
    }
  }
`;
