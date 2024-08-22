// Arrays (Básico) video 29

const alunos = ['Joana', 'Luiza', 'Maria'];
console.log(alunos);

// Formas de incluir mais um elemento no array
alunos[alunos.length] = 'Luana'; // inclui no final
alunos.push('Sílvia'); // inclui no final

console.log(alunos);

// Alterando um elemento através do índice
alunos[0] = 'Roberta';

console.log(alunos);

// Incluir um elemento no início
alunos.unshift('Ana');
console.log(alunos);

// Remover o último elemento
alunos.pop();
console.log(alunos);

// Remover o último elemento e armazenando-o em uma variável
const removido = alunos.pop();
console.log(`Aluno removido: ${removido}`);
console.log(alunos);

// Remover o primeiro elemento com método, com esse método todos os demais 
// elementos do array tem o índice alterado
alunos.shift();
console.log(alunos);

// Apagar um elemento sem afetar os índices do array
delete alunos[1];
console.log(alunos);

// Adicionando mais elementos para continuar atividade
alunos.push('Joana');
alunos.push('Bruna');
alunos.push('Suzana');
alunos[1] = 'Jéssica';
console.log(alunos);

// Assim como em strings, em arrays podemos também fatiar utilizando o método slice()
// Seleciona do primeiro elemento até o elemento de anterior ao índice 3.
console.log(alunos.slice(0, 3)); 
// Seleciona do primeiro elemento até o alunos.length - 3.
console.log(alunos.slice(0, -3)); 


// Como verificar se um Array é um Array mesmo
console.log(alunos instanceof Array); // true 