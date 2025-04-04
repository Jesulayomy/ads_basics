def draw(n):
    if n == 0:
        return
    draw(n - 1)
    for i in range(n):
        print('#', end='')
    print()

draw(100)
