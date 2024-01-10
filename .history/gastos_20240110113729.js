

function GastosPorKm(distancia, tipo){


    if(distancia !== Number.isInteger(distancia)){
        Error("O numero precisa ser um numero inteiro")
    }

    if(tipo !== 'gasolina' || tipo !== 'alcool'){
        Error('Apenas Gasolina e Alcool')
    }
    let consumo;
    if(consumo === 'gasolina'){
        consumo = 16;
    } else {
        consumo = 11
    }

    distancia = 10000

    const LitrosNecessarios = distancia / consumo
    // Number.parseInt(LitrosNecessarios)
    console.log(LitrosNecessarios);
    return 
}

module.exports = {GastosPorKm}
