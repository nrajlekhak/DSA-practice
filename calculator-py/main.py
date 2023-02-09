def bit_sifted_add(a:int, b:int):
    if b == 0: return a

    return bit_sifted_add(a^b, (a&b) << 1)

def bit_sifted_sub(a:int, b:int):
    if b == 0: return a

    if a < b: b *= -1

    a = a^b
    b = (~a & b) << 1
    return bit_sifted_sub(a,b)

def bit_sifted_mul(a:int, b:int):
    result = 0
    sign = -1 if (a <0 and b>0) or (b<0 and a>0) else 1
    
    a = abs(a)
    b = abs(b)

    while b!=0:
        if b & 1: 
            result = result + a

        a = a << 1
        b = b >> 1


    return result*sign

def bit_sifted_div(dividend:int, divisor:int):
    

    # when dividend and divisor are 0 illegal Mathematical Operation
    if dividend == 0 and divisor == 0:
        raise Exception('Illegal Mathematical Operation, dividing 0 by 0')

    # when dividend is 0, result of division is also 0
    if dividend == 0:
        return 0

    # when divisor is 0, result of division is infinity
    if divisor == 0:
        return 'infinity'
    
    quotient = 0
    sign = -1 if (dividend <0 and divisor>0) or (divisor<0 and dividend>0) else 1

    dividend = abs(dividend)
    divisor = abs(divisor)

    for i in range(31,-1,-1):
        if  divisor << i <= dividend:
            dividend-=divisor << i
            quotient += 1 <<i

    if sign < 0:
        quotient = -quotient

    return quotient 



print('bitwise add', bit_sifted_add(10, 1))
print('bitwise sub', bit_sifted_sub(-9, -10))
print('bitwise mul', bit_sifted_mul(12, 9))
print('bitwise div', bit_sifted_div(10, 2))