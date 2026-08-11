import './Contact.css'

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaPaperPlane
} from 'react-icons/fa'

function Contact() {

    return (

        <div className="contact">

            <div className="contact-text">

                <span>Vamos Trabalhar Juntos!</span>

                <h2>Tem um Projeto em Mente?</h2>

                <p className="contacts-text">
                    Estou sempre aberta a novas oportunidades, freelas e colaborações.
                    Me conta sua ideia e vamos ver como tirar ela do papel.
                </p>

                <a
                    href="mailto:dudasummchen@email.com"
                    className="contact-cta"
                >
                    Enviar mensagem <FaPaperPlane />
                </a>

            </div>


            <div className="linha"></div>


            <div className="contact-icons-wrapper">

                <span className="icons-label">
                    Conecte-se
                </span>

                <div className="contact-list">

                    {/* GitHub */}

                    <a
                        href="https://github.com/dudasummchen"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-item"
                    >

                        <div className="contact-icon">
                            <FaGithub />
                        </div>

                        <div className="contact-info">
                            <strong>GitHub</strong>
                            <span>@dudasummchen</span>
                        </div>

                    </a>


                    {/* LinkedIn */}

                    <a
                        href="https://www.linkedin.com/in/maria-eduarda-correa-summchen-b3996336b"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-item"
                    >

                        <div className="contact-icon">
                            <FaLinkedin />
                        </div>

                        <div className="contact-info">
                            <strong>LinkedIn</strong>
                            <span>Maria Eduarda Summchen</span>
                        </div>

                    </a>


                    {/* Email */}

                    <a
                        href="mailto:dudasummchen@email.com"
                        className="contact-item"
                    >

                        <div className="contact-icon">
                            <FaEnvelope />
                        </div>

                        <div className="contact-info">
                            <strong>Email</strong>
                            <span>dudasummchen@email.com</span>
                        </div>

                    </a>

                </div>

            </div>

        </div>
    )
}

export default Contact