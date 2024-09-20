const itens = [
    { nome: "Televisão", quantidade: 2, precoUnitario: 1800 },
    { nome: "Fone de Ouvido", quantidade: 3, precoUnitario: 200 },
    { nome: "Notebook", quantidade: 1, precoUnitario: 2500 },
    { nome: "Drone", quantidade: 1, precoUnitario: 1200 },
    { nome: "Console de Jogos", quantidade: 2, precoUnitario: 2000 },
    { nome: "Câmera Fotográfica", quantidade: 1, precoUnitario: 1500 },
    { nome: "Monitor", quantidade: 2, precoUnitario: 1000 },
    { nome: "Smartwatch", quantidade: 3, precoUnitario: 800 },
    { nome: "Tablet", quantidade: 1, precoUnitario: 1000 },
    { nome: "Projetor", quantidade: 1, precoUnitario: 900 },
    { nome: "Impressora", quantidade: 1, precoUnitario: 600 }
];



function calcularTotalItens (produto) {
    return produto
    .map(produto => produto.precoUnitario * produto.quantidade) 
    .reduce((acumular, valorAtual) => acumular + valorAtual, 0);
}


console.log(calcularTotalItens(itens));