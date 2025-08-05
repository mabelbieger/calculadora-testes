function validarParametros(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    throw new Error('Parâmetros inválidos: não pode ser null ou undefined');
  }
}

function somar(a, b) {
  validarParametros(a, b);
  return a + b;
}

function subtrair(a, b) {
  validarParametros(a, b);
  return a - b;
}

function multiplicar(a, b) {
  validarParametros(a, b);
  return a * b;
}

function dividir(a, b) {
  validarParametros(a, b);
  if (b === 0) {
    throw new Error("Divisor não pode ser zero");
  }
  return a / b;
}

function porcentagem(a, b) {
  validarParametros(a, b);
  return (a * b) / 100;
}

module.exports = { somar, subtrair, multiplicar, dividir, porcentagem };
