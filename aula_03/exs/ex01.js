// Faça um programa que calcule a taubada do numero digitado de 1 a 10

const rl = readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let numero;

rl.question('Digite um numero: ', (num) => {
  numero = parseFloat(num);
  console.log("O numero digitado foi: " + numero);

  for (let i = 1; i <= 10 ; i ++) {
    console.log(`${numero} * ${i} = ${numero * i}`);
  }
  rl.close();
});

// Rodar localmente
// docker compose run --rm app node aula_03/exs/ex01.js