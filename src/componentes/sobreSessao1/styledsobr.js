import styled from "styled-components";
import { data } from "../data";

export const StyledSobretexto = styled.div`
 z-index: 5;
  width: 50%;
  padding: 30px;
color: ${data.sobreNos.corparagrafo};
  span {
    font-size: 2rem;
    font-weight: 100;
     
  }

  h2 {
    padding-top: 30px;
  }
  p{
    text-align: center;
    margin-left: 5%;
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding: 10px;

    span {
        position: relative;
        top: -40px;
      font-size: 1.5rem;
    }
  }
`;

export const StyledSobre = styled.div`
  position: relative;
  display: flex;
  height: 90vh;
  background-color:  ${data.sobreNos.corFundo};
  justify-content: center; /* Alterado para centralizar */
  align-items: center; /* Novo - centralizar verticalmente */

   
  p {
    flex-direction: column;
    width: 90%;
    padding-top: 20px;
    font-size: 18px;
  }

  img {
    position: relative;
     width: 400px;
  border-radius: 200px;
     max-height: 500px;
   
    object-fit: cover;
   top: 10px;
 
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    height: auto;
    width: 100%;
    text-align: center;
    padding-top: 10px;
    p {
      width: 90%;
      padding: 10px;
    }
    h2{
        font-size: 1.2rem;
         padding-top: 0;
    }

    img {
      width: 100%; /* Modificado para centralizar */
      max-width: 100%;
      height: 300px;
    }
  }
`;
