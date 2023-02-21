def utopian_tree(n):
    height = 1
    for i in range(0, n+1):
        if i == 0:
            continue
        if i == 1:
            height = height + 1
            continue
        if i % 2 == 0:
            height = height + 1
        else:
            height = height * 2

    return height


print('0', utopian_tree(0))
print('1', utopian_tree(1))
print('4', utopian_tree(4))
