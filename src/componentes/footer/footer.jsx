import { data } from "../data";
import { Footersection, StyleFooter } from "./styledFooter";

export default function Footer() {
    return (
        <>
            <StyleFooter>
                <Footersection>
                    <h1>{data.fotter.titulo1}</h1>
                    <p>{data.fotter.texto}</p>
                    <div className="redesSociaisFooter">
                        <ul>
                            <li><a href={data.topoMenu.linkInstagran} target="blank"><img src={data.topoMenu.imagemInsta} alt="Instagram" /> </a></li>
                            <li><a href={data.topoMenu.linkLinkedin} target="blank"><img src={data.topoMenu.imagemLinkedin} alt="LinkedIn" /></a></li>
                            <li><a href={data.topoMenu.linkYoutube} target="blank"><img src={data.topoMenu.imagemYoutube} alt="YouTube" /></a></li>
                            <li><a href={data.topoMenu.linkfacebook}  target="blank"><img src={data.topoMenu.imagemfacebook} alt="Facebook" /></a></li>
                        </ul>
                    </div>
                </Footersection>

                <Footersection>
                    <h2>{data.fotter.titulo2}</h2>
                    <ul>
                        <li><a href="#" target="_blank">{data.fotter.semana}</a></li>
                        <li><a href={data.fotter.linkEndereço} target="_blank">{data.fotter.endereco}</a></li>
                        <li><a href={"tel:" + data.fotter.telefone}>{data.fotter.telefone}</a></li>
                        <li><a href={"tel:" + data.fotter.celular}>{data.fotter.celular}</a></li>
                        <li><a href={"mailto:" + data.fotter.email}>{data.fotter.email}</a></li>
                    </ul>
                </Footersection>

                <Footersection>
                    <h2>Áreas de atuação</h2>
                    <ul>
                        <li>{data.fotter.texto1}</li>
                        <li>{data.fotter.texto2}</li>
                        <li>{data.fotter.texto3}</li>
                        <li>{data.fotter.texto4}</li>
                        <li>{data.fotter.texto5}</li>
                        <li>{data.fotter.texto6}</li>
                        <li>{data.fotter.texto7}</li>
                    </ul>
                </Footersection>
            </StyleFooter>
            <span>{data.fotter.Copyrigh}</span>
        </>
    );
}
