// Como utilizar aspas duplas dentro de uma string com aspas duplas
let umaString = "Um \"texto\"";

// string em javascript são iteráveis, ou seja, os caracteres são indexados, começando pelo 0

console.log(umaString.charAt(4)); // t

// indexOf: método que diz qual o indice que inicia o argumento informado
// 1 - Quando informado apenas o argumento que se está buscando.
console.log(umaString.indexOf('texto')); // 4

// 2 - Se informado o sgundo argumento(número), a busca será efetuada somente a partir desse índice
console.log(umaString.indexOf('t', 5)); // 7 aqui o 't' identificado é o segundo 't' de 'texto'

// lastIndexOf: método que diz qual o indice que inicia o argumento informado,
// porém a busca é efetuada de trás para frente
console.log(umaString.lastIndexOf('t', 5)); // 4 aqui o 't' identificado é o primeiro de 'texto'

// Formas de concatenar strings

console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`); // método ideal para utilizar no dia a dia

// .match() : aceita como argumentos expressões regulares (regex)

// No exemplo abaixo serão listadas todas as letras minúsculas dentro da string
console.log(umaString.match(/[a-z]/g)); // 'm', 't', 'e', 'x', 't', 'o' 

// .search() : retorna o indice onde for encontrado a primeira ocorrencia da expressão regular
console.log(umaString.search(/[a-z]/)); // 1 

// .replace() : substitui trechos de uma string por outra, aceita regex
umaString = 'O rato roeu a roupa do rei de roma.'
console.log(umaString.replace('rato', 'gato')); // O gato roeu a roupa do rei de roma.
console.log(umaString.replace(/r/, 'p')); // O pato roeu a roupa do rei de roma.
// para substituir todas as ocorrências acrescentar a letra 'g' ao final da regex
console.log(umaString.replace(/r/g, 'p')); // O pato poeu a poupa do pei de poma.

// .length : retorna o tamanho da string
console.log(umaString.length); // 35

/**
 * .slice(): seleciona um trecho da string a partir de um ou dois argumentos,
 * caso seja informado apenas um argumento seleciona tudo que vier a partir desse
 * índice. No caso de informado dois argumentos começa a selecionar a partir do 
 * primeiro argumento e seleciona até a posição anterior do numero informado.
 * Também podemos utilizar números negativos para fazer a seleção de tras para frente
 */

console.log(umaString.slice(2)); // rato roeu a roupa do rei de roma.
console.log(umaString.slice(2, 5)); // rat
console.log(umaString.slice(2, 6)); // rato
console.log(umaString.slice(-5)); // roma.
console.log(umaString.slice(-12, -9)); // rei

// .split() : método que retorna um array, sendo cada elemento será definido pelo argumento informado
console.log(umaString.split(' ')); // ['O', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'roma.']

// o argumento informado é excluído no retorno
console.log(umaString.split('r')); // ['O ', 'ato ', 'oeu a ', 'oupa do ', 'ei de ', 'oma.']

// .toUpperCase(): modifica todos os caracteres para maiúsculos
console.log(umaString.toUpperCase());

// toLowerCase(): modifica todos os caracteres para minúsculos
console.log(umaString.toLowerCase());