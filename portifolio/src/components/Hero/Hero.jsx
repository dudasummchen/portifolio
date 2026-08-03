import './Hero.css'


function Hero() {

    return (

        <div className="hero">

            <div className="hero-text">

                <span>Olá, eu sou a</span>

                <h1>Maria</h1>

                <h2 className="cargo">Desenvolvedora Júnior</h2>
                
                <p>
                   Transformo ideias em experiências digitais modernas, intuitivas e funcionais.

                </p>

                <div className="buttons">

                    <a href="#projects">
                        <button>Ver Projetos</button>
                    </a>

                    <a href="#contact">
                        <button className="outline">
                            Contato
                        </button>
                    </a>

                </div>

            </div>

            <div className="hero-image">

              <img 
    src="https://placehold.co/400x400"
    alt="Foto de perfil"
/>

            </div>

        </div>

    )

}

export default Hero