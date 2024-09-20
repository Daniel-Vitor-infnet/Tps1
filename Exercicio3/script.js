const avaliacoes = [5.2, 9.4, 1.3, 4.2, 4.9, 7.0, 8.0];

function calcularMediaAvaliacoes(notas) {
    const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const media = soma / notas.length;
    return media;
}

console.log(calcularMediaAvaliacoes(avaliacoes));