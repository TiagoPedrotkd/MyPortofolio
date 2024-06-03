import Link from "../Link/Link";

const Nav = ({ title }: { title: string }) => (
  <nav>
    <h1 style={{ animation: "appear 0.25s 0.2s both" }}>{title}</h1>
    <ul style={{ animation: "appear 0.25s 0.4s both" }}>
      <li>
        <Link to="/about" colorEnd="#fff">
          About
        </Link>
      </li>
      <li>
        <Link to="/portfolio" colorEnd="#000">
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="/contact" colorEnd="#fff">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav