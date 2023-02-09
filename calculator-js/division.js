export function div(dividend, divisor) {
  let quotient = 0;
  let remainder = dividend;

  // when dividend and divisor are 0 illegal Mathematical Operation
  if (dividend === 0 && divisor === 0) {
    throw new Error('Illegal Mathematical operation');
  }

  // when dividing by 0
  if (divisor === 0) {
    return { quotient: 'infinity', remainder: 0 };
  }

  // check for dividing 0

  if (dividend === 0) {
    return { quotient: 0, remainder: 0 };
  }

  do {
    if (remainder < divisor) {
      break;
    }
    remainder -= divisor;
    quotient++;
  } while (remainder > divisor);

  return {
    quotient,
    remainder,
  };
}
