/*
Avaliação de Curto-Circuito (Short-Circuit)

FALSY - valores que são avaliados como 'false' quando necessário
false
0 - o valor zero
'', "", `` - strings vazias
null / undefined
NaN 

*/

/*
Na avaliação de short-cicuit, encontrar um valor 'false'/'FALSY' e o operador '&&'
a avaliação é interrompida e retornada como 'false'.
O mesmo vale para o 'true' com o operador '||', a operação é retornada como 'true' e encerrada.
*/
console.log('Luiz' && 'Maria')