// Video 26 - Mais sobre numbers 
// Precisão que o Javascript segue para números IEEE-2008
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Numbers_and_dates
let num1 = 10; // number
let num2 = 10; // number
let num3 = 10.525125632; // number
// Podemos lançar mão de métodos em tipos primitivos, por exemplo transformar um number em string
num1 = num1.toString(); // String
console.log(num1);

// Podemos converter em string binário
console.log(num2.toString(2)); // 1010

// Limitar a quantidade de casas decimais até o '4' arredonda pra baixo
console.log(num3.toFixed(2)); // 10.53

// Verificar se um númeo é inteiro
console.log(Number.isInteger(num3)); // false

// Verificar se o valor de entrada é NaN
let temp = num1 * 'olá';
console.log(Number.isNaN(temp)); // true

// Ajustar imprecisão de números ponto flutuante para inteiros
let num4 = 0.7; // number
let num5 = 0.1; // number

num4 += num5; // saída esperada: 0.8 | saída de fato 0.7999999999999999
console.log(num4); 
num4 += num5; // saída esperada: 0.9 | saída de fato 0.8999999999999999
console.log(num4); 
num4 += num5; // saída esperada: 1.0 | saída de fato 0.9999999999999999
console.log(num4); 

// O método abaixo não funciona
// num4 = num4.toFixed(2); 
console.log(Number.isInteger(num4)); // false

// Método correto em javascript
num4 = parseFloat(num4.toFixed(2)); 
// outro método válido
// num4 = Number(num4.toFixed(2)); 
console.log(Number.isInteger(num4)); // true

num4 += num5; // saída esperada: 1.1 | saída de fato 1.1
console.log(num4); 
num4 += num5; // saída esperada: 1.2 | saída de fato 1.2000000000000002
console.log(num4); 
num4 += num5; // saída esperada: 1.3 | saída de fato 1.3000000000000003
console.log(num4);

// Outra forma de resolver é efetuando multiplicação e divisão por números inteiros
// Não é a mais recomendada
let num6 = 0.7;
let num7 = 0.1;

num6 = ((num6 * 100) + (num7 * 100)) / 100; // saída 0.8
console.log(num6);
num6 = ((num6 * 100) + (num7 * 100)) / 100; // saída 0.9
console.log(num6);
num6 = ((num6 * 100) + (num7 * 100)) / 100; // saída 1.0
console.log(num6);