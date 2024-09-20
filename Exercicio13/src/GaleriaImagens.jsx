function GaleriaImagens() {

    const imagens = [
        { url: 'https://img.freepik.com/fotos-gratis/composicao-de-comida-brasileira-deliciosa-de-alto-angulo_23-2148739223.jpg', legenda: 'Almoço' },
        { url: 'https://ocp.news/wp-content/uploads/2019/08/cafe-colinial-foto-ilustrativa-triadvisor.jpg', legenda: 'Café da tarde' },
        { url: 'https://guiadacozinha.com.br/wp-content/uploads/2018/09/shutterstock_550722205.jpg', legenda: 'Jantar' }
    ];

    return (
        <ol>
            {
                imagens.map(imagem => (
                    <div>
                        <img
                            src={imagem.url}
                            alt={imagem.legenda}
                            style={{ width: '150px', height: '150px' }}
                        />
                        <p>{imagem.legenda}</p>
                    </div>
                ))
            }
        </ol>
    )
}

export default GaleriaImagens;

