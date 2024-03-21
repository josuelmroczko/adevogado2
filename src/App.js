import React, { useState, useEffect } from 'react';
import './App.css';
import Topo from './componentes/TopoMenu/Topo';
import SobreNos from './componentes/sobreSessao1/sobreNos';
import { Servicos } from './componentes/servicosSessao2/servicos';
import Navbar from './componentes/barraMenu/barra';
import { StyleProficionais } from './componentes/proficionaisSessao3/profiStyle';
import Proficionais from './componentes/proficionaisSessao3/proficionais';
import FaleConosco from './componentes/faleConoscoSessao4/faleConosco';
import ContatoConteudo from './componentes/faleConoscoSessao4/faleConosco';
import Local from './componentes/localizacao/local';
import Footer from './componentes/footer/footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando uma espera de 2 segundos para carregar
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading-circle"></div>
      ) : (
        <>
          <Topo />
          <Navbar/>
          <SobreNos />
          <Servicos/>
           <Proficionais/>
           <ContatoConteudo/>
           <Local/>
           <Footer/>
        </>
      )}
    </div>
  );
}

export default App;
