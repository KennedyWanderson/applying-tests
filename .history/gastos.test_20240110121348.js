
const testes = require("./gastos")

test('10km são 909 litros em alcool', () => {
     expect(testes.GastosPorKm()).toBe(2)
})