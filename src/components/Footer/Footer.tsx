import "../../styles/index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-footer">
        <p>Tiago Pedro .</p>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu">
          <li className="footer_menu_list">
            <a href="#home">Home</a>
          </li>
          <li className="footer_menu_list">
            <a href="#about">About</a>
          </li>
          <li className="footer_menu_list">
            <a href="#projects">Projects</a>
          </li>
          <li className="footer_menu_list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-social-icons">
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
      <div className="bottom-footer">
        <p>
          Copyright &copy;{" "}
          <a href="#home" className="alter">
            Tiago Pedro
          </a>{" "}
          - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
