import React, { useState } from "react";
import Modal from "react-modal";
import { ModalStyled, StyleProficionais } from "./profiStyle";
import { data } from "../data";

export default function Proficionais() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProfissional, setSelectedProfissional] = useState(null);

  const openModal = (profissional) => {
    setSelectedProfissional(profissional);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProfissional(null);
    setModalIsOpen(false);
  };

  return (
    <StyleProficionais>
      <div className="time">
        <span>{data.profissionais.texto1}</span>
        <h2>{data.profissionais.titulo}</h2>
        <p>{data.profissionais.texto}</p>
      </div>
      <ul>
        <li onClick={() => openModal(data.profissionais. profissional1)}>
          <img src={data.profissionais. profissional1.foto} alt="" />
          <div className="timeDescricao">
            <h3>{data.profissionais. profissional1.nome}</h3>
            <p>{data.profissionais. profissional1.especialidade}</p>
            <span className="textoProficional">{data.profissionais. profissional1.texto}</span>
          </div>
        </li>
   { /*  <li onClick={() => openModal(data.profissionais.profissional2)}>
          <img src={data.profissionais.profissional2.foto} alt="" />
          <div className="timeDescricao">
            <h3>{data.profissionais.profissional2.nome}</h3>
            <p>{data.profissionais.profissional2.especialidade}</p>
            <span className="textoProficional">{data.profissionais.profissional2.texto}</span>
          </div>
        </li>
        <li onClick={() => openModal(data.profissionais.profissional3)}>
          <img src={data.profissionais.profissional3.foto} alt="" />
          <div className="timeDescricao">
            <h3>{data.profissionais.profissional3.nome}</h3>
            <p>{data.profissionais.profissional3.especialidade}</p>
            <span className="textoProficional">{data.profissionais.profissional3.texto}</span>
          </div>
        </li>
        <li onClick={() => openModal(data.profissionais.profissional4)}>
          <img src={data.profissionais.profissional4.foto} alt="" />
          <div className="timeDescricao">
            <h3>{data.profissionais.profissional4.nome}</h3>
            <p>{data.profissionais.profissional4.especialidade}</p>
            <span className="textoProficional">{data.profissionais.profissional4.texto}</span>
          </div>
        </li>*/} 
      </ul>

      {selectedProfissional && (
  <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={{
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: '10%',
      width: '70%',  
      height: '100%',
      left: '10%',
      textAlign: "center",
    }
  }}>
    <ModalStyled>
      <img className="modal-image" src={selectedProfissional.foto} alt="" />
  
      <div className="textosModal">
        <h2>{selectedProfissional.nome}</h2>
        <p>{selectedProfissional.especialidade}</p>
        <p>{selectedProfissional.texto}</p> {/* Adicionando o texto do profissional */}
         
     
   
      </div>
      <button className="modal-close" onClick={closeModal}>X</button>
      
    </ModalStyled>
    
  </Modal>
)}

    </StyleProficionais>
  );
}
