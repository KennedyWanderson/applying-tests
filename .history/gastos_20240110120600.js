function GastosPorKm(distancia, tipo) {
    if (!Number.isInteger(distancia) || distancia <= 0) {
        throw new Error("A distância precisa ser um número inteiro positivo");
    }

    if (tipo !== 'gasolina' && tipo !== 'alcool') {
        throw new Error('Apenas Gasolina e Alcool são permitidos');
    }

    let consumo;
    if (tipo === 'gasolina') {
        consumo = 16;
    } else {
        consumo = 11;
    }

    const litrosNecessarios = distancia / consumo;
    const litrosArredondados = Math.round(litrosNecessarios); // Arredonda para o número inteiro mais próximo
    
    console(litrosArredondados, "litros necessários para o percuso."); 
    
}

module.exports = { GastosPorKm };
