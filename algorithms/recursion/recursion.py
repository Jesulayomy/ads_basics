def recursive_sum(numbers):
    if not numbers:
        return 0
    return numbers[0] + recursive_sum(numbers[1:])

numbers = [1, 31, 42, 5, 41, 52, 41, 52, 14, 254, 14, 24]
print(recursive_sum(numbers))