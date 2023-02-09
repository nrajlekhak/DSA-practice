export function bitwiseAdd(a, b) {
  if (b == 0) {
    return a;
  }

  return bitwiseAdd(a ^ b, (a & b) << 1);
}

export function bitwiseDiff(a, b) {
  if (b === 0) {
    return a;
  }

  if (a == 0) {
    return b * -1;
  }

  a = a ^ b;
  b = (-a & b) << 1;
  return bitwiseDiff(a, b);
}

export function bitwiseProduct(a, b) {
  let result = 0;
  const neg = a < 0 || b < 0;
  a = Math.abs(a);
  b = Math.abs(b);
  while (b != 0) {
    // Iterate the loop till b == 0
    if (b & 1) {
      // Bitwise & of the value of b with 1
      result = result + a; // Add a to result if b is odd .
    }
    a = a << 1; // Left shifting the value contained in 'a' by 1
    // Multiplies a by 2 for each loop
    b = b >> 1; // Right shifting the value contained in 'b' by 1.
  }

  if (neg) {
    result *= -1;
  }

  return result;
}

export function bitwiseDivLog(dividend, divisor) {
  let quotient = 0;
  let neg = dividend < 0 || divisor < 0;

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  quotient = Math.exp(Math.log(dividend) - Math.log(divisor)) + 0.0000000001;

  if (neg) quotient = -quotient;
  return Math.fround(quotient);
}

export function bitwiseDiv(dividend, divisor) {
  let quotient = 0;

  for (let i = 31; i >= 0; --i) {
    if (divisor << i <= dividend) {
      dividend -= divisor << i;
      quotient += 1 << i;
    }
  }
  return quotient;
}
