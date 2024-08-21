// Tipos de dados primitivos em Javascript
// String, number, undefined, null, boolean e symbol (não tratado nesse video)
const nome = 'Ricardo'; // string
const nome1 = "Ricardo"; // string
const nome3 = `Ricardo`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta para local nenhum na memória (atribuição efetuada pelo engine do JS)
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória 
const aprovado = false; // Boolean 

// passando o valor por referência 
let a = 2;
let b = a; // 2, 2

a = 3;
console.log(a, b); // 3, 2

b = 4; 
console.log(a, b); // 3, 4