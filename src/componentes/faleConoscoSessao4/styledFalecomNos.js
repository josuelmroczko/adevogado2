import styled from "styled-components";
import { data } from "../data";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
  padding-bottom: 100px;
  .contatos-container {
    text-align: start;
    padding-top: 50px;
    span {
      color: ${data.style.corSpanTimeDeESpecialista};
      font-size: 2rem;
      padding-top: 20px;
    }
    h1 {
      font-size: 3rem;
      padding-top: 10%;
    }
    p {
      font-size: 1.5rem;
      padding-top: 10%;
    }
  }
  .redesSociais {
    ul {
      display: flex;
    }
    li {
      list-style: none;
       
      padding: 5px;
    }
    img {
      width: 30px;
    }
  }

  .form-container {
    padding-top: 5%;

    h3 {
      font-size: 2rem;
    }
  }

  .input,
  .textarea,
  .button {
    margin-bottom: 10px;
    width: 100%;
    max-width: 300px;
    font-size: 18px;
    padding-top: 20px;
    align-items: center;
  }

  .button {
    padding-bottom: 15px;
    cursor: pointer;
  }
  .button:hover {
    background-color: #696969;
  }

  /* Media query para telas menores que 768px (móveis) */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Centraliza os itens na direção principal (vertical) */
     
    .contatos-container {
      padding-top: 20px;
      text-align: center; /* Centraliza o texto */
      span {
        font-size: 1.5rem;
        padding-top: 10px;
      }
      h1 {
        font-size: 2rem;
        padding-top: 5%;
      }
      p {
        font-size: 1.2rem;
        padding-top: 5%;
      }
    }

    .redesSociais {
      img {
        width: 20px;
      }
    }

    .form-container {
      flex-direction: column;
      align-items: center; /* Centraliza os itens na direção principal (vertical) */
      h3 {
        font-size: 1.5rem;
      }
    }

    .input,
    .textarea,
    .button {
      font-size: 16px;
    }
  }
`;
