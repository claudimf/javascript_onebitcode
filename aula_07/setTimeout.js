console.log("Script iniciado")
console.log("Inciando contagem")

setTimeout(function(){
    console.log("Executado após 3s")
}, 3 * 1000)

console.log("Contagem iniciada")
console.log("O script ainda está em execução")
console.log("Script finalizado")

// Rodar localmente
// docker compose run --rm app node aula_07/setTimeout.js