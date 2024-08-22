// Objeto simples

const pessoa = {
    nome: 'João',
    sobrenome: 'Da Silva',
    idade: 26
}

console.log(pessoa.nome);

// Objeto criado por função (factory)

function criarPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa1 = criarPessoa('Maria', 'Batista', 30);
console.log(pessoa1.nome);

// Outra forma de declarar
function criarPessoa1(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa2 = criarPessoa1('Márcia', 'Oliveira', 22);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);

// Objeto simples com métodos
const pessoa3 = {
    nome: 'José',
    sobrenome: 'Falabela',
    idade: 29,

    // Método
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }
};

pessoa3.fala();