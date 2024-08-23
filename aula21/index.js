/**
 * Operadores de comparação
 * 
 *  >   maior que
 *  >=  maior que ou igual a
 *  <   menor que
 *  <=  menor que ou igual a
 *  ==  igualdade (checa se dois operandos tem 'valor' iguais entre si) **Não recomendado utilização**
 *  === igualdade estrita (checa e se 'valor' e 'tipo' são iguais) ***Recomendado uso ***
 *  !=  diferente de (checa se dois operandos tem 'valor' diferentes entre si) **Não recomendado utilização**
 *  !== diferente estrito (checa e se 'valor' e 'tipo' são diferentes) *** Recomendado ***
 */

// Exemplo de como o '==' e o '!=' tem comportamento inesperado e não devem ser utilizados
// Temos duas váriaveis de tipos diferentes, a resposta esperada deveria ser 'false'
let num1 = 10; // number
let num2 = '10'; // string
const comparacao = num1 == num2;
console.log(comparacao); // A saída deveria ser 'false' mas acaba sendo 'true'

// Utilização recomendada é usar o operadores '===' e o '!=='
const comparacao1 = num1 === num2;
console.log(comparacao1); // false





