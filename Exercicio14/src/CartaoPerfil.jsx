import './CartaoPerfil.css';

function CartaoPerfil() {

    return (
        <article>
            <div className="cartao-perfil">
                <img
                    className="imagem"
                    src="https://i.pinimg.com/736x/0d/0e/93/0d0e939d220bf6fe27d34f2cc8d0cd95.jpg"
                    alt="Foto de perfil"
                />
                <h2 className="usuario">Carlos Andrade</h2>
                <p className="biografia">
                    Sou um entusiasta da tecnologia com paixão por resolver problemas e aprender coisas novas. Com experiência em desenvolvimento web, gosto de criar soluções práticas e eficientes. No meu tempo livre, aprecio ler sobre novas tendências e melhorar minhas habilidades.
                </p>
            </div>
        </article>
    )
}

export default CartaoPerfil;

