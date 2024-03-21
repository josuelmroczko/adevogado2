import styled from "styled-components";
import { data } from "../data";

export const StyledServicos = styled.section`
  height: 100%;
  width: 100%;
  text-align: center;
  position: relative;

  .content {
    padding: 5%;

    span {
      font-size: 3.5vw; /* Utilizando unidade vw para ajustar o tamanho da fonte de acordo com a largura da tela */
      color: dimgrey;
    }

    h2 {
      padding: 2vw; /* Utilizando unidade vw para espaçamento entre o texto e os elementos */
      font-size: 4vw; /* Utilizando unidade vw para ajustar o tamanho da fonte de acordo com a largura da tela */
    }
   
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }

  li {
    background-color: ${data.servicos.corFundoOpcoesDeServicos};
    text-align: center;
    max-width: 400px;
    height: 300px;
    margin: 5px;
    width: 33.33%;
    padding: 2%;
    color: ${data.servicos.corTextos};
    border-radius: 10px;

    h2 {
      color: ${data.servicos.corH2};
      font-size: 3vw; /* Utilizando unidade vw para ajustar o tamanho da fonte de acordo com a largura da tela */
    }
  }
p{
  font-size: 18px;
}
  @media screen and (max-width: 768px) {
    li {
      width: 50%;
      
    }
  }

  @media screen and (max-width: 480px) {
    li {
      width: 180%;
      height: 100%;
    }
 
  }
`;
