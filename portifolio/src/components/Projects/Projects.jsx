import './Projects.css'


function Projects() {

    const projetos = [

        {
            imagem: "https://via.placeholder.com/600x400",
            nome: 'Biblioteca Viva',
            descricao:
                'Sistema desenvolvido para consulta e organização de livros utilizando React.',
            tecnologias: 'React • CSS • JavaScript',
            github: 'https://github.com/',
            demo: '#'
        },

        {
            imagem: "https://placehold.co/600x400",
            nome: 'Ecoleta',
            descricao:
                'Projeto criado para incentivar o descarte correto de resíduos e promover sustentabilidade.',
            tecnologias: 'HTML • CSS • PHP • MySQL',
            github: 'https://github.com/',
            demo: '#'
        },

        {
           imagem: "https://placehold.co/600x400",
            nome: 'Portfólio',
            descricao:
                'Meu portfólio pessoal desenvolvido em React para apresentar meus projetos e habilidades.',
            tecnologias: 'React • Vite • CSS',
            github: 'https://github.com/',
            demo: '#'
        }

    ]

    return (

        <div className="projects">

            <h2>Projetos</h2>

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

        </div>

    )

}

export default Projects