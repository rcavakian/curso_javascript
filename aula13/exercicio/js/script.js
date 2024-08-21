const nome = prompt('Digite seu nome completo:');
// Seu nome é:
document.body.innerHTML = `Seu nome é: ${nome} <br />`;

// Seu nome tem ______ letras
const nomeSemEspaco = nome.replaceAll(' ', '');
const quantidadeLetras = nomeSemEspaco.length;
document.body.innerHTML += `Seu nome tem ${quantidadeLetras} letras.<br />`;


// A segunda letra do seu nome é: ______
const segundaLetra = nomeSemEspaco.charAt(1);
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra}.<br />`;

// Qual o primeiro índice da letra 'a' no seu nome? ______
const indiceLetraA = nome.search('a');
document.body.innerHTML += `Qual o primeiro índice da letra 'a' no seu nome? ${indiceLetraA}<br />`;

// Qual o último índice da letra LETRA no seu nome? ______
const ultimoIndiceLetra = nome.lastIndexOf('a');
document.body.innerHTML += `Qual o último índice da letra 'a' no seu nome? ${ultimoIndiceLetra}<br />`;

// As últimas 3 letras do seu nome são: ______
const ultimasTresLetras = nome.slice(-3);
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultimasTresLetras}<br />`;

// As palavras do seu nome são: ______
const palavrasNome = nome.split(' ');
document.body.innerHTML += `As palavras do seu nome são: <br />`;

for (let i = 0; i < palavrasNome.length; i++) {
    document.body.innerHTML += `${(i+1)}a - ${palavrasNome[i]} <br />`;
}

// Seu nome com letras maiúsculas: ______
const nomeMaiuscula = nome.toUpperCase();
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nomeMaiuscula} <br />`;

// Seu nome com letras minúsculas: ______
const nomeMinuscula = nome.toLowerCase();
document.body.innerHTML += `Seu nome com letras minúsculas: ${nomeMinuscula} <br />`;

/**
 * Resultado esperado
 * 
 * nome = Dino da Silva Sauro
 *  Seu nome é: Dino da Silva Sauro
    Seu nome tem 16 letras.
    A segunda letra do seu nome é: i.
    Qual o primeiro índice da letra 'a' no seu nome? 6
    Qual o último índice da letra 'a' no seu nome? 15
    As últimas 3 letras do seu nome são: uro
    As palavras do seu nome são:
    1a - Dino
    2a - da
    3a - Silva
    4a - Sauro
    Seu nome com letras maiúsculas: DINO DA SILVA SAURO
    Seu nome com letras minúsculas: dino da silva sauro 
 * 
 */