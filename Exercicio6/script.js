const produtosC = [
    { nome: "Smart TV", categoria: "Eletrônicos" },
    { nome: "Tênis Esportivo", categoria: "Calçados" },
    { nome: "Notebook", categoria: "Eletrônicos" },
    { nome: "Jaqueta", categoria: "Roupas" },
    { nome: "Fone de Ouvido", categoria: "Eletrônicos" },
    { nome: "Relógio de Pulso", categoria: "Acessórios" },
    { nome: "Mochila", categoria: "Acessórios" },
    { nome: "Console de Videogame", categoria: "Eletrônicos" },
    { nome: "Camisa Social", categoria: "Roupas" },
    { nome: "Tênis Casual", categoria: "Calçados" },
    { nome: "Tablet", categoria: "Eletrônicos" }
];



function filtrarPorCategoria  (produtos,categoria) {
    return produtos.filter(produto => produto.categoria === categoria);
}

console.log(filtrarPorCategoria(produtosC, 'Roupas')); 