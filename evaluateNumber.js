function evaluateNumber(numero) {
    if (numero > 0) {
      return 'El número es positivo.';
    } else if (numero < 0) {
      return 'El número es negativo.';
    } else {
      return 'El número es cero.';
    }
  }
  console.log(evaluateNumber(18));