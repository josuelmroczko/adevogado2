import { data } from "../data";
import { StyledSobre, StyledSobretexto } from "./styledsobr";

 
 
 


export default function SobreNos(){
    return(
        <>  
        <a id="sobre"></a>
        <StyledSobre>
        <StyledSobretexto>
            <span>{data.sobreNos.sobrenos}</span>
            <h2>{data.sobreNos.titulo}</h2>

            <p>{data.sobreNos.paragrafo1}</p>
            <p>{data.sobreNos.paragrafo2}</p>
            <p>{data.sobreNos.paragrafo3}</p>
        </StyledSobretexto>

        <img src={data.sobreNos.fotoAdv} alt="" />
        </StyledSobre>
        
        </>
    )
}