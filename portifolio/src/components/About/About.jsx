import "./About.css";

function About() {
  return (
    <div className="about">

      <div className="about-title">
        <span>Conheça um pouco</span>
        <h2>Sobre Mim</h2>
      </div>

      <div className="about-container">

        <div className="about-text">

        <p> Sou estudante do <strong>Ensino Médio Técnico em Informática para Internet</strong> e desenvolvedora Front-end em formação.
         Tenho interesse em criar interfaces modernas, intuitivas e funcionais utilizando tecnologias como HTML, CSS, JavaScript, React, PHP e MySQL.
</p>
        </div>

        <div className="about-info">

          <div className="card">
            <span>🎓</span>
            <h3>Formação</h3>
            <p>Ensino Médio Técnico em Informática para Internet</p>
          </div>

          <div className="card">
            <span>📍</span>
            <h3>Localização</h3>
            <p>Porto Alegre - RS</p>
          </div>

          <div className="card">
            <span>💼</span>
            <h3>Objetivo</h3>
            <p>Primeira oportunidade como Desenvolvedora Front-end</p>
          </div>

          <div className="card">
            <span>💻</span>
            <h3>Stack</h3>
            <p>React • JavaScript • HTML • CSS • PHP • MySQL</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;