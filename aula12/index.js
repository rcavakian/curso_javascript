// Exercio: dada três variáveis, faça com que uma aponte para o valor da outra

let varA = 'A'; // 'B'
let varB = 'B'; // 'C'
let varC = 'C'; // 'A'

console.log(varA, varB, varC);

// solução mais antiga e simples de resolver o problema
let auxiliar = varA;

varA = varB;
varB = varC;
varC = auxiliar;

console.log(varA, varB, varC);

// solução mais recente do javasript para resolver o problema

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
