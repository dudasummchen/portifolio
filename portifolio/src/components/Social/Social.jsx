import './Social.css'

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from 'react-icons/fa'

function Social() {

    return (

        <div className="social">

            <h2>Redes Sociais</h2>

            <p>
                Você pode me encontrar nas plataformas abaixo.
            </p>

            <div className="social-icons">

                <a
                    href="https://github.com/dudasummchen"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/maria-eduarda-correa-summchen-b3996336b"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin />
                </a>

                <a href="mailto:dudasummchen@email.com">

                    <FaEnvelope />

                </a>

            </div>

        </div>

    )

}

export default Social