const numero = Number(prompt('Informe um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

// Raiz quadrdada:
let raizQuadradada = numero ** 0.5;
texto.innerHTML += `<p>Raiz quadrada: <strong>${raizQuadradada}<strong>.</p>`

// XXX é inteiro:
let resposta;
if (Number.isInteger(numero)) {
    resposta = 'sim';
} else {
    resposta = 'não'
}
texto.innerHTML += `<p>${numero} é inteiro: <strong>${resposta}</strong>.</p>`

// É Nan:
if (Number.isNaN(numero)) {
    resposta = 'sim';
} else {
    resposta = 'não'
}
texto.innerHTML += `<p>É NaN: <strong>${resposta}</strong>.</p>`

// Arredondando para baixo:
texto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(numero)}</strong>.</p>`

// Arredondando para cima:
texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(numero)}</strong>.</p>`

// Com duas casas decimais:
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong>.</p>`
