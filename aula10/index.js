/**
 * Operadores Aritméticos
 * 
 * + -> Adição / Concatenação
 * - -> Subtração
 * / -> Divisão
 * * -> Multiplicação
 * ** -> Potenciação
 * % -> Modulus Operator ou Operador de Módulo - Resto da divisão
 * ++ -> Incremento: pode ser pós ou pré incremento
 * -- -> Decremento: pode ser pós ou pré decremento
 *
 * Operadores de atribuição
 * 
 * += 
 * -=
 * *=
 * /=
 * %=
 * **=
 *  
 * Precedência
 * 
 * 1 -> ()
 * 2 -> **
 * 3 -> * / %
 * 4 -> + -
 */

// Concatenação
let num1 = '5'; // string
let num2 = 10; // number

console.log(num1 + num2); // 510

// Subtração
num1 = 5;
console.log(num1 - num2); // -5

// Divisão
console.log(num1 / num2); // 0.5

// Multiplicação
console.log(num1 * num2); // 50

// Potenciação
console.log(num1 ** num2); // 9765625

// Resto da divisão
num1 = 3;
console.log(num2 % num1); // 1

// Incrementar uma vriável
let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
console.log(contador++); // 4 primeiro exibe o valor da variável para depois incrementar
console.log(contador); // 5 mas a variável foi incrementada
console.log(++contador); //6 Pré-imcremento: primeiro faz o incremento para depois ser exibido

// Como tratar Nan

const num3 = 5;
const num4 = '10';
console.log(num3 + num4); // 510

const num5 = 5; 
const num6 = parseInt('10.5');
const num7 = parseFloat('10.5');
const num8 = Number('10.5'); // pode usar tanto para inteiros como para decimais
console.log(num5 + num6); // 15
console.log(num5 + num7); // 15.5
console.log(num5 + num8); // 15.5