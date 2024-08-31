import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import avatar from "../../assets/images/perfil_image.png";

import "./FeaturedBox.css";

const FeaturedBox = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  function downloadCV() {
    const link = document.createElement("a");
    link.href = "../../assets/files/Tiago_Pedro_Soares_CV.pdf"; // Substitua pelo caminho real do seu PDF
    link.download = "Your_CV.pdf"; // Nome do arquivo ao ser baixado
    link.style.display = "none"; // Não exibe o link
    document.body.appendChild(link);
    link.click(); // Simula o clique no link
    document.body.removeChild(link); // Remove o link da página
  }

  function scrollToContact() {
    // Obtém o elemento da seção de contatos
    const contactSection = document.getElementById("contact");

    // Verifica se a seção de contatos existe
    if (contactSection) {
      // Rola suavemente para a seção de contatos
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    // Instancia o efeito de digitação com as configurações desejadas
    const typed = new Typed(typedRef.current!, {
      strings: ["Developer", "Master's Student", "Taekwondo Athlete"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });

    // Limpeza para destruir a instância do Typed.js quando o componente for desmontado
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Tiago Pedro</span>
        </div>
        <div className="featured-name">
          <p>
            I'm <span ref={typedRef} className="typedText"></span>
          </p>
        </div>
        <div className="featured-text-info">
          <p>
            Passionate computer engineer skilled in full-stack development and
            Data Science. My sports background enhances my focus and teamwork,
            driving impactful web solutions
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn blue-btn" onClick={scrollToContact}>
            Hire Me
          </button>
          <button className="btn" onClick={downloadCV}>
            Download CV <i className="uil uil-file-alt"></i>
          </button>
        </div>
        <div className="social_icons">
          <a
            href="https://www.instagram.com/tiagopedrotkd"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tiago-soares-5b1ab4282"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/TiagoPedrotkd"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
