const Pikachu = require("./Pikachu");

function primeiraLetraMaiuscula(palavra) {
    const palavraSemEspaco = palavra;

    return (
        palavraSemEspaco[0].toUpperCase() + palavraSemEspaco.slice(1).toLowerCase()
    );
}

function imprimir(pokemon) {
    const nomePokemon = primeiraLetraMaiuscula(pokemon.name);
    const tipoPokemon = (pokemon) => {
        let tipos = [];
        for (let i = 0; i < pokemon.types.length; i++) {
            tipos += `${primeiraLetraMaiuscula(pokemon.types[i])} `;
        }
        return tipos;
    };

    const habilidade = primeiraLetraMaiuscula(pokemon.ability);

    const preEvolucao = (pokemon) => {
        if (pokemon.preEvolution === null) {
            return "";
        } else {
            const preEvolucaoComMaiusculo = primeiraLetraMaiuscula(
                pokemon.preEvolution
            );

            return `${preEvolucaoComMaiusculo} >>`;
        }
    };
    const evolucaoAtual = (pokemon) => {
        return `${pokemon.name.toUpperCase()} >>`;
    };
    const evolucao = (pokemon) => {
        if (pokemon.evolution === null) {
            return "";
        } else {
            const EvolucaoComMaiusculo = primeiraLetraMaiuscula(pokemon.evolution);
            return EvolucaoComMaiusculo;
        }
    };

    //const hpAtributos = (pokemon) => pokemon.attributes.hp
    const Atributos = (pokemon) => {
        let Hp = pokemon.attributes.hp;
        let Attack = pokemon.attributes.attack;
        let Defense = pokemon.attributes.defense;
        let SpecialAttack = pokemon.attributes.specialAttack;
        let SpecialDefense = pokemon.attributes.specialDefense;
        let Speed = pokemon.attributes.speed;

        return (
            console.log(`HP: ${Hp}`),
            console.log(`ATK: ${Attack} SpATK: ${SpecialAttack}`),
            console.log(`DEF: ${Defense} SpDEF: ${SpecialDefense}`),
            console.log(`SPEED: ${Speed}`)
        );
    };

    const levels = (pokemon) => {
        let moves = pokemon.moves
        let niveis = []
        console.log("\nAtaques: \n\n");
        for (let i = 0; i < moves.length; i++) {
            let novoNivel = { nome: moves[i].name, level: moves[i].lv }
            niveis.push(novoNivel)
        }
        niveis.sort((a, b) => {
            return a.level - b.level;
        })
        for (let i = 0; i < moves.length; i++) {
            console.log(`Lv ${niveis[i].level} - ${primeiraLetraMaiuscula(niveis[i].nome)}`)
        }

    };


    console.log(`Nome: ${nomePokemon} - Tipo: ${tipoPokemon(Pikachu)}`);
    console.log(`Habilidade: ${habilidade}\n`);
    console.log(
        `Linha de evolução: ${preEvolucao(pokemon)} ${evolucaoAtual(
            pokemon
        )} ${evolucao(pokemon)} \n`
    );
    console.log(`Atributos: \n\n`);
    Atributos(pokemon);
    levels(Pikachu);
}
imprimir(Pikachu);

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

// function isEmpty (x) {
//   if (!x) { // caso seja undefined
//       return true
//   }
//   if (x === '' || x === null){ //caso seja uma variavel vazia
//       return true
//   }
//   if(Array.isArray(x)) { // caso seja um array vazio
//       if (x[0] === '' || x[0] === undefined) {
//           return true
//       }
//   }
//   if (JSON.stringify(x) === '{}') { // caso seja um objeto vazio
//       return true
//   }
//   return false
// }
