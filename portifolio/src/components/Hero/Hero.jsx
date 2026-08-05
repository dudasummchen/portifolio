import "./Hero.css";
import { FaDownload } from "react-icons/fa";
import fotoMaria from "../../assets/images/maria.png";

function Hero() {
  return (
    <div className="hero">

      <div className="hero-text">

        <p className="eyebrow">Olá, eu sou a</p>

        <h1 className="name-pixel">
          MARIA<span className="pixel-cursor"></span>
        </h1>

        <p className="role">
          Desenvolvedora Júnior
        </p>

        <p className="desc">
          Transformo{" "}
          <code className="inline-code">
            ideias
          </code>{" "}
          em{" "}
          <code className="inline-code">
            &lt;experiências/&gt;
          </code>{" "}
          digitais modernas, intuitivas e funcionais.
        </p>


        <div className="buttons">

          <a href="#projects" className="btn">
            Ver meus projetos
          </a>


          <a
            href="/cv-maria.pdf"
            download="Maria_CV.pdf"
            className="btn cv"
          >
            Baixar meu CV
            <FaDownload className="icone-download" />
          </a>

        </div>

      </div>


      <div className="hero-image">

        <img
          src={fotoMaria}
          alt="Foto de perfil"
        />

      </div>

    </div>
  );
}

export default Hero;