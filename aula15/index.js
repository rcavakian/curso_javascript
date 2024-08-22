// Explorando a biblioteca Math

/**
 * ATENÇÃO ATENÇÃO ATENÇÃO ATENÇÃO ATENÇÃO ATENÇÃO ATENÇÃO ATENÇÃO ATENÇÃO 
 * Tomar cuidado que o javascript aceita fazer divisão por ZERO
 * Não gera erro e é avaliado como true
 */

let num1 = 9.49564;
let num2 = 9.50564;

// Método para arredondar para baixo independente dos valores nos decimais
console.log(Math.floor(num1)); // 9
console.log(Math.floor(num2)); // 9

// Método para arredondar para cima independente dos valores nos decimais
console.log(Math.ceil(num1)); // 10
console.log(Math.ceil(num2)); // 10

// Método para arredondar para os valores analisando os decimais
console.log(Math.round(num1)); // 9
console.log(Math.round(num2)); // 10

// Identificar o maior número de uma sequencia
console.log(Math.max(1, 2, 3, 5, 9, -100, 1500)); // saída 1500

// Identificar o menor número de uma sequencia
console.log(Math.min(1, 2, 3, 5, 9, -100, 1500)); // saída -100

// Utilizando o número PI
console.log(Math.PI);

// Gerando um número aleatótio entre 0 e 9
let aleatorio = Math.floor(Math.random() * 10);
console.log(aleatorio);

// Gerando um número aleatório entre dois números (min e max), ambos inclúidos
let min = 1;
let max = 100;
aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
console.log(aleatorio);
aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
console.log(aleatorio);
aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
console.log(aleatorio);
aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
console.log(aleatorio);
aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
console.log(aleatorio);
aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
console.log(aleatorio);
aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
console.log(aleatorio);
aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
console.log(aleatorio);
aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
console.log(aleatorio);

// Forma de calcular raiz quadrada sem usar método
let num3 = 9;
console.log(num3 ** (1/2)); // 3
console.log(num3 ** 0.5); // 3

// Utilizando o método de Math
console.log(Math.sqrt(num3)); // 3

