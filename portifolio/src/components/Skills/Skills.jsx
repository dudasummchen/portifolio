import './Skills.css'

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaFigma
} from 'react-icons/fa'

import {
    SiVite,
    SiPhp,
    SiMysql
} from 'react-icons/si'

function Skills() {

    const skills = [

        {nome:'HTML',icone:<FaHtml5 />},

        {nome:'CSS',icone:<FaCss3Alt />},

        {nome:'JavaScript',icone:<FaJs />},

        {nome:'React',icone:<FaReact />},

        {nome:'Vite',icone:<SiVite />},

        {nome:'PHP',icone:<SiPhp />},

        {nome:'MySQL',icone:<SiMysql />},

        {nome:'Git',icone:<FaGitAlt />},

        {nome:'GitHub',icone:<FaGithub />},

        {nome:'Figma',icone:<FaFigma />}

    ]

    return (

        <div className="skills">

            <h2>Habilidades</h2>

            <div className="skills-grid">

                {skills.map((skill,index)=>(

                    <div className="skill-card" key={index}>

                        <div className="icon">

                            {skill.icone}

                        </div>

                        <h3>

                            {skill.nome}

                        </h3>

                    </div>

                ))}

            </div>

        </div>

    )

}

export default Skills