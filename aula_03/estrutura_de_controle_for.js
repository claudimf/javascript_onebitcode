// WHILE
console.log()
console.log("FOR")

const rl = readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let numero;

rl.question('Digite um numero: ', (num) => {
  numero = parseFloat(num);
  console.log("O numero digitado foi: " + numero);

  for (let i = 0; numero > i; i ++) {
    console.log(`${numero} é maior que i - i = ${i}`);
  }

  console.log("Outra forma");
  for (let i = 0; numero > i;) {
    console.log(`${numero} é maior que i - i = ${i}`);
    i += 1
  }

  console.log("Outra forma");
  let i = 0
  for (; numero > i;) {
    console.log(`${numero} é maior que i - i = ${i}`);
    i += 1
  }

  rl.close();
});

// Rodar localmente
// docker compose run --rm app node aula_03/estrutura_de_controle_for.js