import "./Skills.css";

const skills = [
  { nome: "HTML5", slug: "html5" },
  { nome: "CSS3", slug: "css3" },
  { nome: "JavaScript", slug: "javascript" },
  { nome: "React", slug: "react" },
  { nome: "Vite", slug: "vite" },
  { nome: "PHP", slug: "php" },
  { nome: "MySQL", slug: "mysql" },
  { nome: "Git", slug: "git" },
  { nome: "GitHub", slug: "github", color: "ffffff" },
  { nome: "Figma", slug: "figma" },
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2>Habilidades</h2>

      <p className="skills-text">
        Tecnologias e ferramentas que utilizo nos meus projetos.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-icon">
              <img
                src={`https://cdn.simpleicons.org/${skill.slug}${skill.color ? "/" + skill.color : ""}`}
                alt={skill.nome}
              />
            </div>

            <span>{skill.nome}</span>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;