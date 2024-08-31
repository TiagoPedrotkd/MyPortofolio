import React, { useEffect, useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [hasShadow, setHasShadow] = useState(false); // Estado para gerenciar a sombra do cabeçalho

  // Função para abrir e fechar o menu
  const myMenuFunction = () => {
    const menuBtn = document.getElementById("myNavMenu");

    if (menuBtn) {
      if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    } else {
      console.warn("Elemento com ID 'myNavMenu' não encontrado.");
    }
  };

  // Função para adicionar a classe 'active-link' ao link do menu correspondente à seção visível
  const scrollActive = () => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      const navLink = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink?.classList.add("active-link");
      } else {
        navLink?.classList.remove("active-link");
      }
    });
  };

  // Função para adicionar ou remover sombra do cabeçalho durante o scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };

  useEffect(() => {
    // Adiciona os listeners de scroll para o efeito de navegação ativa e a sombra do cabeçalho
    window.addEventListener("scroll", scrollActive);
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove os listeners quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", scrollActive);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Estilo dinâmico para o cabeçalho
  const headerStyle = {
    boxShadow: hasShadow ? "0 1px 6px rgba(0, 0, 0, 0.1)" : "none",
    height: hasShadow ? "70px" : "90px",
    lineHeight: hasShadow ? "70px" : "90px",
    transition: "all 0.3s ease",
  };

  function downloadCV() {
    const link = document.createElement("a");
    link.href = "../../assets/files/Tiago_Pedro_Soares_CV.pdf"; // Substitua pelo caminho real do seu PDF
    link.download = "Your_CV.pdf"; // Nome do arquivo ao ser baixado
    link.style.display = "none"; // Não exibe o link
    document.body.appendChild(link);
    link.click(); // Simula o clique no link
    document.body.removeChild(link); // Remove o link da página
  }

  return (
    <nav id="header" style={headerStyle}>
      <div className="nav-logo">
        <p className="nav-name">Tiago</p>
        <span>.</span>
      </div>
      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#home" className="nav-link active-link">
              Home
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#about" className="nav-link">
              About
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <div className="circle"></div>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        <button className="btn" onClick={downloadCV}>
          Download CV <i className="uil uil-file-alt"></i>
        </button>
      </div>
      <div className="nav-menu-btn" onClick={myMenuFunction}>
        <i className="uil uil-bars"></i>
      </div>
    </nav>
  );
};

export default Header;
