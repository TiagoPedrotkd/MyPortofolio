import Link from "../Link/Link";
import "./Nav.css";

const Nav = ({ title }: { title: string }) => (
  <nav className="appear">
    <h1  className="appear" style={{ animation: "appear 0.25s 0.2s both" }}>{title}</h1>
    <ul style={{ animation: "appear 0.25s 0.4s both" }}>
      <li>
        <Link to="/about" colorEnd="#222">
          About
        </Link>
      </li>
      <li>
        <Link to="/portofolio" colorEnd="#222">
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="/contact" colorEnd="#222">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav