
 
import { useState } from 'react';
import emailjs from '@emailjs/browser'
import { StyledDiv } from './styledFalecomNos';
import { data } from '../data';
  



export default function ContatoConteudo() {
  const [textareaRows, setTextareaRows] = useState(1);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
 
  function sendEmail(e){
    e.preventDefault();
    if(name ===''|| email ==='' || message===''){
      alert("Preencha todos os campos")
      return
    }

    const templateParams ={
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_6n3k3e6","template_erejt8l",templateParams,"eb6YouwGZ_PxGm0rD")//Alterar para o email do cliente
    .then((response) => {
        console.log("Email enviado:", response.status, response.text);
        alert("Email enviado com sucesso!");
        setName('');
        setEmail('');
        setMessage('');
    })
    .catch((error) => {
        console.error("Erro ao enviar email:", error);
        alert("Erro ao enviar email. Por favor, tente novamente mais tarde.");
    });
  }
  
  
  return (
    <StyledDiv>
      <a id='contato'></a>
      <div className="contatos-container">
        <span  >{data.contatos.faleConosco}</span>
        <h1>{data.contatos.titulo}</h1>
        <p>{data.contatos.texto}</p>
        
        <div className='redesSociais'>

          <ul>
            <li><a href={data.topoMenu.linkInstagran} target="_blank" ><img src={data.topoMenu.imagemInsta} alt="imagemInsta" />        </a></li>
            <li><a href={data.topoMenu.linkLinkedin} target="_blank"  ><img src={data.topoMenu.imagemLinkedin} alt="imagemLinkedin" /> </a></li>
            <li><a href={data.topoMenu.linkYoutube} target="_blank"  ><img src={data.topoMenu.imagemYoutube} alt="imagemYoutube" />   </a></li>
            <li><a href={data.topoMenu.linkfacebook} target="_blank"  ><img src={data.topoMenu.imagemfacebook} alt="imagemfacebook" /> </a></li>
          </ul>
        </div>
      </div>


      <div className="form-container">
        <form className="form" onSubmit={sendEmail}>
          <h3>Enviar email</h3>
          <input 
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input 
            className="input"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea 
  className="textarea"
  placeholder="Digite sua mensagem..."
  onChange={(e) => {
    setMessage(e.target.value);
    const rows = Math.ceil(e.target.scrollHeight / 0); // Ajuste conforme necessário
    setTextareaRows(rows);
  }}
  value={message}
  rows={textareaRows}
/>
          <input className="button" type="submit" value="Enviar" />
        </form>
      </div>
     
     
    
    </StyledDiv>
  );
}