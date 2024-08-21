alert('Com a nossa mensagem!'); // Caixa de mensagem pop-up com botão ok
const confirmacao = confirm('Deseja realmente apagar?'); // Caixa de dialogo com retorno booleano: ok(true) ou cancelar(false).

if (confirmacao) {
    alert('Mensagem apagda!');
} else {
    let nome = prompt('Digite seu nome:');
    alert(`Nome informado: ${nome}`);
}
    
const num1 = Number(prompt('Digite o pimeiro número:'));
const num2 = Number(prompt('Digite o segundo número:'));

const resultado = num1 + num2;
alert(`A soma dos dois números é ${resultado}`);