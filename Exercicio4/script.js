const produtosC = [
    { nome: "Televisão", preco: 1800 },
    { nome: "Notebook", preco: 2500 },
    { nome: "Fone Bluetooth", preco: 300 },
    { nome: "Drone", preco: 1200 },
    { nome: "Console de Jogos", preco: 2000 },
    { nome: "Câmera Fotográfica", preco: 1500 },
    { nome: "Projetor", preco: 1000 },
    { nome: "Impressora 3D", preco: 2200 },
    { nome: "Monitor UltraWide", preco: 1300 },
    { nome: "Smart Speaker", preco: 400 },
    { nome: "Soundbar", preco: 600 }
];


function filtrarAcimaPreco (produtos, preco) {
    return produtos.filter(produto => produto.preco > preco);
}

console.log(filtrarAcimaPreco(produtosC, 1000));
