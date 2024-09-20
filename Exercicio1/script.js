//Não fiz nada muito complexo não foi pedido para fazer nada muito complexo como receber valores com virgula ou algo do tipo, então fiz algo bem simples mesmo.

//Para ser mais rápido eu defini os valores fixo, porém para navegador eu usaria: let preco = prompt("Por favor, digite o preço do produto:");

const preco = 10
const quantidade = 3

function calcularPrecoTota (preco, quantidade) {
    return "O preço total é: " + preco * quantidade;
}

console.log(calcularPrecoTota(preco, quantidade));
