import './Projects.css'

function Projects() {

    const projetos = [

        {
            imagem: "https://via.placeholder.com/600x400",
            nome: 'Biblioteca Viva',
            descricao: 'Sistema para consulta e organização de livros.',
            tecnologias: 'React • CSS • JavaScript',
            github: 'https://github.com/',
            demo: '#'
        },

        {
            imagem: "https://placehold.co/600x400",
            nome: 'Ecoleta',
            descricao: 'Plataforma para incentivar o descarte correto de resíduos.',
            tecnologias: 'HTML • CSS • PHP • MySQL',
            github: 'https://github.com/',
            demo: '#'
        },

        {
            imagem: "https://placehold.co/600x400",
            nome: 'Portfólio',
            descricao: 'Meu portfólio desenvolvido em React.',
            tecnologias: 'React • Vite • CSS',
            github: 'https://github.com/',
            demo: '#'
        }

    ]

    return (

        <section className="projects" id="projects">

            <h2>Projetos</h2>
              <p className="projects-text"> Projetos desenvolvidos aplicando tecnologias e soluções criativas</p>
              
             <div className="projects-grid">
                {projetos.map((projeto, index) => (

                    <div className="project-card" key={index}>

                        <img
                            src={projeto.imagem}
                            alt={projeto.nome}
                        />

                        <div className="project-info">

                            <h3>{projeto.nome}</h3>

                            <p>{projeto.descricao}</p>

                            <span>{projeto.tecnologias}</span>

                            <div className="buttons-project">

                                <a
                                    href={projeto.github}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>

                                <a
                                    href={projeto.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Demo
                                </a>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    )

}

export default Projects