const produtosC = [
    { nome: "Laptop", disponivel: true },
    { nome: "Tablet", disponivel: true },
    { nome: "Smartphone", disponivel: true },
    { nome: "Monitor", disponivel: false },
    { nome: "Teclado", disponivel: true },
    { nome: "Mouse", disponivel: false },
    { nome: "Smartwatch", disponivel: true },
    { nome: "Fone de Ouvido", disponivel: true },
    { nome: "Câmera", disponivel: true },
    { nome: "Console de Videogame", disponivel: true },
    { nome: "Carregador Portátil", disponivel: false }
];

function filtrarDisponiveis (produtos) {
    return produtos.filter(produto => produto.disponivel === true);
}

console.log(filtrarDisponiveis(produtosC));

