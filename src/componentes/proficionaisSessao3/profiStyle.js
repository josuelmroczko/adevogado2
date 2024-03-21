import styled from "styled-components";
import { data } from "../data";

export const StyleProficionais = styled.div`
  position: relative;
  text-align: center;
  
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  li {
    width: 300px;
    height: 300px;
    list-style: none;
    position: relative;
    margin-bottom: 70px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  li::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.3s ease;
  }
  li:hover::after {
    background-color: rgba(0, 0, 0, 0.4);
  }
  span {
    color:${data.style.corSpanTimeDeESpecialista};
    padding: 10px;
    font-size: 2rem; /* Tamanho de fonte fixo */
  }
  h2 {
    padding: 5px;
    font-size: 3rem; /* Tamanho de fonte fixo */
  }
  .time {
    top: 10px;
    padding: 25px;
  }
  .timeDescricao {
    position: relative;
    top: -60px;
    color: antiquewhite;
    background-color: rgba(0, 0, 0, 0.4);
  }
   .modal-close{
    position: relative;
    color: maroon;
    top: -50px;
    height: 50px;
    width: 50px;
    font-size: 20px;
    background-color: transparent;
   }

  @media screen and (max-width: 768px) {
    span {
      font-size: 1.5rem; /* Reduz o tamanho da fonte para telas menores */
    }
    h2 {
      font-size: 2rem; /* Reduz o tamanho da fonte para telas menores */
    }
  }

  /* Estilos para o modal */
  .ReactModal__Content .ReactModal__Content--after-open{
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 50%; /* Largura ajustada para 50% da tela */
  max-width: 600px; /* Adicionado um limite máximo de largura para o modal */
  max-height: 80%; /* Altura máxima ajustada para 80% da tela */
  overflow: auto;
}
.textoProficional{
  display: none;
}
 
 
`;

export const ModalStyled = styled.div`
   width: 100%;
   display: flex;
 justify-content: center;
 
   .modal-image {
    position: relative;
    width: 46%; /* Ajuste conforme necessário */
    max-width: 200px; 
    height: 300px;
     object-fit: cover; /* Manter a proporção da imagem e cortar o excesso */
  }
 
    .imagensRedesSociais{
 
    
 
      
      li{
        position: relative;
        top: 30px;
        list-style: none;
        
      }
    }
    img{
      width: 90%;
    }

   p {
    padding-top: 20px;
    font-size: 20px;
    margin-left: 10px; /* Adiciona um espaçamento à esquerda dos textos */
   }

   .textosModal {
    width: 60%; /* Ajuste conforme necessário */
   }

   @media screen and (max-width: 768px) {
    flex-direction: column;
    p{
      font-size: 12px;
    }
     
  height: 100%;
     .modal-image {
      
       width: 100%; /* Altera para largura total em telas menores */
       max-width: none;
       
       height: 150px;
        margin-bottom: 1px; /* Adiciona um espaçamento entre a imagem e o texto */
     }

     .textosModal {
       width: 100%; /* Altera para largura total em telas menores */
       height: 100%;
       margin-left: 0;
     }
   }
.modal-close {
  position: absolute; /* Adiciona o botão de fechar como posição fixa */
  color: red;
  font-weight: bolder;
  top: 20px; /* Define a distância do topo da janela */
  right: 20px; /* Define a distância da direita da janela */
  height: 50px;
  width: 50px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
}

`;
