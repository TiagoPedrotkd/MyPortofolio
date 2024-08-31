import React from "react";
import "./About.css";

const About = () => {
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
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              I excel in HTML, CSS, JavaScript, React, and other modern
              frameworks and libraries...
            </p>
            <div className="about-btn">
              <button className="btn" onClick={downloadCV}>
                Download CV <i className="uil uil-import"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>JavaScript</span>
              <span>React</span>
              <span> Wordpress </span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              <span>PHP</span>
              <span>JAVA</span>
              <span>Python</span>
              <span>C++</span>
              <span> Wordpress (CMS)</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              <span>MySQL</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
