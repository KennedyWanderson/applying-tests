

function GastosPorKm(distancia, tipo){


    if(distancia !== Number.isInteger(distancia)){
        console.log("O numero precisa ser um numero inteiro")
    }

    if(tipo !== 'gasolina' || tipo !== 'alcool'){
        console.log("Escolha apenas Alcool ou Gasolina!")
    }
    let consumo;
    if(consumo === 'gasolina'){
        consumo = 16;
    } else {
        consumo = 11
    }

    distancia = 10000

    const LitrosNecessarios = distancia / consumo
    pars
    console.log(LitrosNecessarios);
}

module.exports = {GastosPorKm}
