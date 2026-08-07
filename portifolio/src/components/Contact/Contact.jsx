import './Contact.css'

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from 'react-icons/fa'

function Contact() {

    return (
          
        <div className="contact">

            <div className="contact-text"> 
            <span>Vamos Trabalhar Juntos!</span>
            <h2>Tem um Projeto em Mente?</h2>
            </div>
              <div className="linha"></div>

            <div className="contact-icons">

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

export default Contact