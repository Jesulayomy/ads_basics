def sum(numbers):
    total = 0
    for number in numbers:
        total += number
    return total

numbers = [1, 31, 42, 5, 41, 52, 41, 52, 14, 254, 14, 24]
print(sum(numbers))