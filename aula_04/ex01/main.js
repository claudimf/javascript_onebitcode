import { valor_dobrado } from './funcoes.js';

let valor = prompt('Digite um número:')
alert(`Valor dobrado: ${valor_dobrado(valor)}`)

// Rodar localmente
// docker compose run --rm app node aula_04/ex01/main.js