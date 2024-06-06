console.log("Script iniciado")
console.log("Inciando contagem")

let contador = 1

const intervalId = setInterval(function(){
    console.log(`Executado ${contador} com id ${intervalId} vezes após 2s`)
    contador++
    if (contador >= 6) {
        clearInterval(intervalId)
    }
}, 2 * 1000)

// clearInterval(intervalId)

console.log("Contagem iniciada")
console.log("O script ainda está em execução")
console.log("Script finalizado")

// Rodar localmente
// docker compose run --rm app node aula_07/setInterval.js