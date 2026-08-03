import './Navbar.css';
import { FaPaperPlane } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#home">Início</a>
        </li>

        <li>
          <a href="#about">Sobre</a>
        </li>

        <li>
          <a href="#skills">Habilidades</a>
        </li>

        <li>
          <a href="#projects">Projetos</a>
        </li>

        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>

      <a
        href="mailto:dudasummchen@gmail.com"
        className="btn-contato"
      >
        Vamos conversar  <FaPaperPlane />
      </a>
    </nav>
  );
}

export default Navbar;