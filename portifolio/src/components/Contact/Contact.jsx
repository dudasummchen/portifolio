import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import './Contact.css'


function Contact() {

    const form = useRef()

    const [enviado, setEnviado] = useState(false)


    function enviarEmail(e){

        e.preventDefault()


        emailjs
        .sendForm(

            'service_ab2te85',

            'template_evsrldy',

            form.current,

            'haBL4Ww9c3BN1F4PY'

        )

        .then(() => {

            setEnviado(true)

            e.target.reset()

        })

        .catch(() => {

            alert('Erro ao enviar mensagem. Tente novamente.')

        })

    }


    return (

        <div className="contact">


            <h2>Entre em contato</h2>


            <p>

                Tem uma oportunidade ou quer conversar sobre um projeto?
                Envie uma mensagem!

            </p>


            <form
                ref={form}
                onSubmit={enviarEmail}
                className="contact-form"
            >


                <input

                    type="text"

                    name="from_name"

                    placeholder="Seu nome"

                    required

                />


                <input

                    type="email"

                    name="reply_to"

                    placeholder="Seu e-mail"

                    required

                />


                <textarea

                    name="message"

                    placeholder="Sua mensagem"

                    rows="5"

                    required

                ></textarea>


                <button type="submit">

                    Enviar mensagem

                </button>


            </form>


            {
                enviado &&

                <p className="success">

                    Mensagem enviada com sucesso! 💌

                </p>
            }


        </div>

    )

}


export default Contact