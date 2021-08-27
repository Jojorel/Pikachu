const Pikachu = require('./Pikachu')

function primeiraLetraMaiuscula(palavra) {

    const palavraSemEspaco = palavra

    return palavraSemEspaco[0].toUpperCase() + palavraSemEspaco.slice(1).toLowerCase()
}

function imprimir(pokemon) {
    const nomePokemon = primeiraLetraMaiuscula(pokemon.name)
    const tipoPokemon = primeiraLetraMaiuscula(pokemon.types[0])
    const habilidade = primeiraLetraMaiuscula(pokemon.ability)
    const preEvolucao = (pokemon) => {
        if (pokemon.preEvolution.length == 0){
            return ""
        }
        else { const preEvolucaoComMaiusculo = primeiraLetraMaiuscula(pokemon.preEvolution)
            
            return preEvolucaoComMaiusculo}
}
    const evolucaoAtual = (pokemon) => {
return pokemon.name.toUpperCase()
    }
    const evolucao = (pokemon) => {
        if (pokemon.evolution.length == 0){
            return ""
        }
        else { const EvolucaoComMaiusculo = primeiraLetraMaiuscula(pokemon.evolution)
            
            return EvolucaoComMaiusculo}
    }

    console.log(`Nome: ${nomePokemon} - Tipo: ${tipoPokemon}`)
    console.log(`Habilidade: ${habilidade}\n`)
    console.log(`Linha de evolução: ${preEvolucao(pokemon)} >> ${evolucaoAtual(pokemon)} >> ${evolucao(pokemon)}`)
    console.log()
}
imprimir(Pikachu)

// Nome: Pikachu - Tipo: Eletrico
//   Habilidade: Static

//   Linha de evolução:
//     Pichu >> PIKACHU >> Raichu

//   Atributos:

//     HP: 100
//     ATK: 55 SpATK: 100
//     DEF: 34 SpDEF: 30
//     SPEED: 150

//   Ataques:
//     Lv 5 - Tackle
//     Lv 9 - Thunder Wave
//     Lv 20 - Thunderbolt
//     Lv 50 - Thunder