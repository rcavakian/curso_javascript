/*
Ricardo Avakian tem 40 anos, pesa 70 kg tem 1.75 de altura
e seu imc é de ...
Ricardo Avakian nasceu em 19xx
*/
const nome = 'Ricardo';
const sobrenome = 'Avakian';
const idade = 40;
const peso = 70;
const alturaEmM = 1.75;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg \ntem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);