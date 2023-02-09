## Addition using Bitwise shift

A addition can be achieved by bitwise shift `<<`, XOR `^` and AND`&` operations
1. sum = XOR of A and B + carry
2. carry = (A&B)<<1

## Subtraction using Bitwise shift
A subtraction can be achieved by bitwise shift `<<`, XOR `^`, NOT `~` and AND`&` operations
1. sub = XOR of A and B - borrow
2. borrow = (~A&B) << 1

## Multiplication using Bitwise shift
1. left shift (<<) by 1 is equivalent to multiply by 2
2. right shift (>>) by 1 is equivalent to division by 2
3. we keep multiplying a with 2 and keep dividing b by 2.
4. if b is odd then, result+=a.
5. multiply a with 2, divide b by 2
6. When b == 1, answer will be result + a


## Division using Bitwise shift
1. check for illegal mathematical operations i.e. 0/0, also check for dividing 0 and dividing by 0
2. for n bit int, create a loop from n to 0
3. if divisor << i is less than or equal to dividend  subtract from dividend and increase quotient by 1 << i
