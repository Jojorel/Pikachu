const Pikachuu = require('./Pikachu')

function primeiraLetraMaiuscula(palavra) {
    
    const palavraSemEspaco = palavra.trim()
    
    return palavraSemEspaco[0].toUpperCase() + palavraSemEspaco.slice(1).toLowerCase()
}

function imprimir(pokemon) {

    
}