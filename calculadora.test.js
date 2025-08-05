const { somar, subtrair, multiplicar, dividir, porcentagem } = require('./calculadora');

test('deve somar dois números corretamente', () => {
  expect(somar(5, 3)).toBe(8);
});

test('deve subtrair dois números corretamente', () => {
  expect(subtrair(10, 4)).toBe(6);
});

test('deve multiplicar dois números corretamente', () => {
  expect(multiplicar(4, 3)).toBe(12);
});

test('deve dividir dois números corretamente', () => {
  expect(dividir(9, 3)).toBe(3);
});

test('deve lançar erro ao dividir por zero', () => {
  expect(() => dividir(10, 0)).toThrow('Divisor não pode ser zero');
});

//testes negativo
test('deve somar com números negativos', () => {
  expect(somar(-5, -3)).toBe(-8);
});

test('deve subtrair com números negativos', () => {
  expect(subtrair(-10, 4)).toBe(-14);
});

test('deve multiplicar com números negativos', () => {
  expect(multiplicar(-4, -3)).toBe(12);
});

test('deve dividir com números negativos', () => {
  expect(dividir(-9, -3)).toBe(3);
});

//testes null e undefined
test('deve lançar erro ao passar null ou undefined na soma', () => {
  expect(() => somar(null, 3)).toThrow();
  expect(() => somar(5, undefined)).toThrow();
});

test('deve lançar erro ao passar null ou undefined na subtração', () => {
  expect(() => subtrair(null, 3)).toThrow();
  expect(() => subtrair(5, undefined)).toThrow();
});

test('deve lançar erro ao passar null ou undefined na multiplicação', () => {
  expect(() => multiplicar(null, 3)).toThrow();
  expect(() => multiplicar(5, undefined)).toThrow();
});

test('deve lançar erro ao passar null ou undefined na divisão', () => {
  expect(() => dividir(null, 3)).toThrow();
  expect(() => dividir(5, undefined)).toThrow();
});

//testes com porcentagem
test('deve calcular porcentagem corretamente', () => {
  expect(porcentagem(200, 10)).toBe(20);
  expect(porcentagem(150, 50)).toBe(75);
  expect(porcentagem(100, 0)).toBe(0);
});

test('deve lançar erro ao passar null ou undefined na porcentagem', () => {
  expect(() => porcentagem(null, 10)).toThrow();
  expect(() => porcentagem(100, undefined)).toThrow();
});
