let veiculo = {
    modelo: "Uno",
    limitePassageiros: 5,
    velocidadeAtual: 0,
    listaDePassageiros: [],
    aumentarVelocidade: function () {
        this.velocidadeAtual += 1;
        console.log(`Velocidade aumentada! Velocidade atual: ${this.velocidadeAtual}km/h`)
    },
    diminuirVelocidade: function () {
        this.velocidadeAtual -= 1;
        console.log(`Velocidade diminuida! Velocidade atual: ${this.velocidadeAtual}km/h`)
    },
    adicionarPassageiro: function (nomePassageiro){
        if ((this.listaDePassageiros.length < this.limitePassageiros) && (this.velocidadeAtual === 0)) {
            this.listaDePassageiros.push(nomePassageiro);
            console.log(`Lista atual de passageiros: ${this.listaDePassageiros}`)
            return;
        } else {
            console.log(`Não é possível adicionar mais passageiros!`)
        }
    }
}

console.log("Veículo:")
console.log(`modelo: ${veiculo.modelo}`)
console.log(`Limite de Passageiros: ${veiculo.limitePassageiros}`)
console.log(`Velocidade Atual: ${veiculo.velocidadeAtual}`)
console.log(`Lista de passageiros: ${veiculo.listaDePassageiros}`)


veiculo.aumentarVelocidade()
veiculo.adicionarPassageiro("Joao")
veiculo.diminuirVelocidade()
veiculo.adicionarPassageiro("Joao")
veiculo.adicionarPassageiro("Maria")
veiculo.adicionarPassageiro("Pedro")
veiculo.adicionarPassageiro("Mariana")
veiculo.adicionarPassageiro("Jose")
veiculo.adicionarPassageiro("Euclides")

// Rodar localmente
// docker compose run --rm app node aula_05/ex02/veiculo.js