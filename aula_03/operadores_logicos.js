// E(AND)
console.log()
console.log(`true && true === ${true && true}`)
console.log(`true && false === ${true && false}`)
console.log(`false && true === ${false && true}`)
console.log(`false && false === ${false && false}`)

// OU(OR)
console.log()
console.log(`true || true === ${true || true}`)
console.log(`true || false === ${true || false}`)
console.log(`false || true === ${false || true}`)
console.log(`false || false === ${false || false}`)

// Não(NOT)
console.log()
console.log(`!true -> ${!true}`)
console.log(`!false -> ${!false}`)
console.log(`!true === !false -> ${!true === !false}`)


// Rodar localmente
// docker compose run --rm app node aula_03/operadores_logicos.js