const produtosC = [
  { nome: 'Notebook', preco: 2499},
  { nome: 'iPad Pro', preco: 4199},
  { nome: 'Copo de Vidro', preco: 12.49},
  { nome: 'Copo de Plástico', preco: 18.99},
  { nome: 'Monitor', preco: 299.99},
  { nome: 'Mouse', preco: 59.99},
  { nome: 'Teclado', preco: 99.99},
  { nome: 'Caixa de Som', preco: 149.99},
  { nome: 'Fone de Ouvido', preco: 49.99},
  { nome: 'Carregador', preco: 39.99}
];




function encontrarProdutoPorNome (produtos, nome) {
  return produtos.find(produto => produto.nome === nome);
}

console.log(encontrarProdutoPorNome(produtosC, 'Caixa de Som'));