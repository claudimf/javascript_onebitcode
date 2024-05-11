// IF/ELSE
console.log()
console.log("IF/ELSE")

if (5 > 3) {
    console.log("5 é maior que 3")
}

if (5 <= 3) {
    console.log("5 é maior que 3")
}

// const idade = parseFloat(prompt('Quantos anos você tem?'))
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Quantos anos você tem?', idade => {
    if (idade >= 18) {
        console.log("Você é maior de idade");
    } else  if (idade >= 12){
        console.log("Você é adolescente");
    } else {
        console.log("Você é criança");
    }
    readline.close();
});


// SWITCH CASE
console.log()
console.log("SWITCH CASE")

// Rodar localmente
// docker compose run --rm app node aula_03/estrutura_de_controle_if_else.js