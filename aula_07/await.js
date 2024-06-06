async function somaAsync(a, b) {
    const numA = parseFloat(a)
    const numB = parseFloat(b)

    if (isNaN(numA) || isNaN(numB)) {
        return Promise.reject("Números inválidos")
    }

    return numA + numB
}

async function executar(num1, num2) {
    try {
        const resultado = await somaAsync(num1, num2)
        console.log("executando...")
        console.log(resultado)
    } catch(erro) {
        console.log(erro)
    }
}


executar(3,7)
executar(3,"teste")

// Rodar localmente
// docker compose run --rm app node aula_07/await.js