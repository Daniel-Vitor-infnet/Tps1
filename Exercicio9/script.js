const itens = [
    { nome: "Televisão", categoria: "Eletrônicos" },
    { nome: "Notebook", categoria: "Eletrônicos" },
    { nome: "Tênis", categoria: "Calçados" },
    { nome: "Tablet", categoria: "Eletrônicos" },
    { nome: "Smartwatch", categoria: "Eletrônicos" },
    { nome: "Relógio de Pulso", categoria: "Acessórios" },
    { nome: "Calça Jeans", categoria: "Roupas" },
    { nome: "Drone", categoria: "Eletrônicos" }
];



function agruparPorCategoria(iten) {

    const produtos = {};

    iten.forEach(produto => {
        if (!produtos[produto.categoria]) {
            produtos[produto.categoria] = [];
        }

        produtos[produto.categoria].push(produto.nome);
    });

    return produtos
}

console.log(agruparPorCategoria(itens));