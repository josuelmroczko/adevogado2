import { data } from "../data";
import { StyledServicos } from "./styledServicos";


export function Servicos(){
    return(
        <StyledServicos>
            <a id="servicos"></a>
             <div className="content">
                <span>{data.servicos.servico}</span>
                <h2>{data.servicos.titulo}</h2>
                <p>{data.servicos.texto}</p>
            </div>
         
            <ul>
                <li>
                    <img src={data.servicos.tributaria.imagemTributaria} alt="imagem Tributaria" />
                    <h2>{data.servicos.tributaria.tributaria}</h2>
                    <p>{data.servicos.tributaria.texto}</p>
                </li>

                <li>

                    <img src={data.servicos.empresarial.imagemempresarial} alt="imagemem presarial" />
                <h2>{data.servicos.empresarial.empresarial}</h2>
                    <p>{data.servicos.empresarial.texto}</p>
                </li>

                <li>
                    <img src={data.servicos.administrativo.imagemadministrativo} alt="" />
                <h2>{data.servicos.administrativo.administrativo}</h2>
                    <p>{data.servicos.administrativo.texto}</p>
                </li>

                <li>
                    <img src={data.servicos.civil.imagemTributaria} alt="imagem Tributaria" />
                    <h2>{data.servicos.servico}</h2>
                    <p>{data.servicos.civil.texto}</p>
                </li>

                <li>
                    <img src={data.servicos.famíliaESucessões.imagemTributaria} alt="" />
                <h2>{data.servicos.famíliaESucessões.famíliaESucessões}</h2>
                    <p>{data.servicos.famíliaESucessões.texto}</p>
                </li>

                <li>
                    <img src={data.servicos.trabalhista.imagemtrabalhista} alt="" />
                <h2>{data.servicos.trabalhista.trabalhista}</h2>
                    <p>{data.servicos.trabalhista.texto}</p>
                </li>

            </ul> 

        </StyledServicos>
    )
}