import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
          </div>

          <ul className="nav-links">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>

          <a href="#contact" className="btn btn-primary">
            Contrate-me
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;