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

          <p>
            Sou estudante do <strong>Ensino Médio Técnico em Informática para Internet</strong> e apaixonada por desenvolvimento web.
          </p>

          <p>
            Gosto de transformar ideias em interfaces modernas, intuitivas e funcionais, sempre buscando unir design e tecnologia para criar experiências agradáveis aos usuários.
          </p>

          <p>
            Atualmente estudo <strong>HTML, CSS, JavaScript, React, PHP e MySQL</strong> e estou em busca da minha primeira oportunidade como Desenvolvedora Front-end, onde possa continuar aprendendo e evoluindo profissionalmente.
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