import "./About.css";

import {
FaCode,
FaGraduationCap,
FaUsers,
FaLightbulb
} from "react-icons/fa";

function About() {

return (
<div className="about">

    <div className="about-container">

        <div className="about-text">

            <div className="about-title">
                <h2>Sobre Mim</h2>
            </div>

            <p>
                Sou estudante do Ensino Médio{" "}
                <strong>Técnico em Informática para Internet</strong>{" "}
                e desenvolvedora Front-end em formação.
                Tenho interesse em criar interfaces modernas,
                intuitivas e funcionais utilizando tecnologias como
                HTML, CSS, JavaScript, React, PHP e MySQL.
            </p>

        </div>

        <div className="about-info">

            <div className="card">

                <span className="card-icon">
                    <FaCode />
                </span>

                <p className="card-title">
                    Código limpo
                </p>

                <p className="card-text">
                    Gosto de organizar e comentar bem o que escrevo.
                </p>

            </div>

            <div className="card">

                <span className="card-icon">
                    <FaGraduationCap />
                </span>

                <p className="card-title">
                    Sempre aprendendo
                </p>

                <p className="card-text">
                    Estudando algo novo todos os dias.
                </p>

            </div>

            <div className="card">

                <span className="card-icon">
                    <FaUsers />
                </span>

                <p className="card-title">
                    Trabalho em equipe
                </p>

                <p className="card-text">
                    Aprendo melhor trocando ideias.
                </p>

            </div>

            <div className="card">

                <span className="card-icon">
                    <FaLightbulb />
                </span>

                <p className="card-title">
                    Curiosa por natureza
                </p>

                <p className="card-text">
                    Gosto de testar e explorar coisas novas.
                </p>

            </div>

        </div>

    </div>

</div>
);

}

export default About;