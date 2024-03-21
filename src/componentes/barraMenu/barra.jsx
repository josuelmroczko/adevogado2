import React, { useState, useEffect } from 'react';
import { NavbarWrapper, Menu, MenuItem } from './baraStyled';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 10);

      // Verifica qual seção está na área visível da tela
      const sections = document.querySelectorAll('section'); // Supondo que as seções tenham a tag <section>
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const offset = 100; // Valor de deslocamento ajustável
    const topPos = section.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: topPos, behavior: 'smooth' });
  };
  

  return (
    <NavbarWrapper isSticky={isSticky}>
      <Menu>
        <MenuItem active={activeSection === 'local'}><a href="#local" onClick={(e) => scrollToSection(e, 'local')}>Local</a></MenuItem>
        <MenuItem active={activeSection === 'sobre'}><a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')}>Sobre</a></MenuItem>
        <MenuItem active={activeSection === 'servicos'}><a href="#servicos" onClick={(e) => scrollToSection(e, 'servicos')}>Serviços</a></MenuItem>
        <MenuItem active={activeSection === 'contato'}><a href="#contato" onClick={(e) => scrollToSection(e, 'contato')}>Entrar em contato</a></MenuItem>
      </Menu>
    </NavbarWrapper>
  );
}

export default Navbar;
