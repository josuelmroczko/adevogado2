import { data } from "../data";
import { StyledLocal } from "./styledLocal";


export default function Local(){
    return(
        <StyledLocal>
             
             <a id="local"></a>
        <iframe src={data.local.local}></iframe>
        </StyledLocal>
    )
}