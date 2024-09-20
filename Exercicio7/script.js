const produtosC = [
    { nome: "Televisão", quantidadeEmEstoque: 7 },
    { nome: "Fone de Ouvido", quantidadeEmEstoque: 0 },
    { nome: "Notebook", quantidadeEmEstoque: 4 },
    { nome: "Drone", quantidadeEmEstoque: 2 },
    { nome: "Console de Jogos", quantidadeEmEstoque: 5 },
    { nome: "Câmera Fotográfica", quantidadeEmEstoque: 1 },
    { nome: "Monitor", quantidadeEmEstoque: 6 },
    { nome: "Smartwatch", quantidadeEmEstoque: 3 },
    { nome: "Impressora", quantidadeEmEstoque: 0 },
    { nome: "Tablet", quantidadeEmEstoque: 8 },
    { nome: "Projetor", quantidadeEmEstoque: 9 }
];

function verificarEstoque (produtos) {
    return produtos.filter(produto => produto.quantidadeEmEstoque > 0);
}

console.log(verificarEstoque(produtosC));