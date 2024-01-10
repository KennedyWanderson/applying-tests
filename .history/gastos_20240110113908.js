

function GastosPorKm(distancia, tipo){

    distancia = 

    if(distancia !== Number.isInteger(distancia)){
        throw("O numero precisa ser um numero inteiro")
    }

    if(tipo !== 'gasolina' || tipo !== 'alcool'){
        throw('Apenas Gasolina e Alcool')
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
    return LitrosNecessarios;
}

module.exports = {GastosPorKm}
