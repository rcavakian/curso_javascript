// Funções em Javascript video 31

// Função clássica

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

// Função anônima

const raizQuadrada = function (numero) {
    return numero ** 0.5;
};
console.log(raizQuadrada(9));

// Arrow function

const raizQuadrada1 = (numero) => {
    return numero ** 0.5;
};
console.log(raizQuadrada1(16));
console.log(raizQuadrada1(64));
console.log(raizQuadrada1(81));

// Arrow function simplificada: quando a função possui apenas uma linha
// caso possua apenas um parâmetro pode-se eliminar os parênteses
const raizQuadrada2 = numero => numero ** 0.5; 
console.log(raizQuadrada2(25));
console.log(raizQuadrada2(36));

