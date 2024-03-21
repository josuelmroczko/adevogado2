import styled from "styled-components";

export const StyleFooter = styled.footer`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    -webkit-box-shadow: 0px 0px 8px 2px #000000;
  -moz-box-shadow: 0px 0px 8px 2px #000000;
  box-shadow: 0px 0px 8px 2px #000000;
`;

export const Footersection = styled.div`
    flex: 1;
    margin-right: 20px;
    padding: 20px;
    max-width: 300px; /* Define a largura máxima */
    font-weight: bold;
    line-height: 30px;
    font-size: 18px;
   a{
    color: black;

   }
   h1{
    line-height: 40px;
   }
    .redesSociaisFooter{
        ul{
            display: flex;
        }
        li{
            padding: 5px;
        }
        img{
            width: 20px;
        }
      
    }
    @media screen and (max-width: 768px) {
        flex-basis:  100%; /* Define a base flexível para ocupar toda a largura em telas menores */
        margin-right: 0;
    }

    li {
        list-style: none;
    }
`;
