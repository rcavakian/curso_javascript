function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    // Array para armazenar os resultados
    const pessoas = [];

    // Função para criar uma pessoa
    function criarPessoa(nome, sobrenome, peso, altura) {
        return {nome, sobrenome, peso, altura}
    }

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const pessoa = criarPessoa(nome.value, sobrenome.value, peso.value, altura.value);
        pessoas.push(pessoa);
        console.log(pessoas);
        resultado.innerHTML += `<p><strong>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</strong></p>`
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();