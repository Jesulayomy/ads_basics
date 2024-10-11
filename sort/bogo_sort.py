import random


def is_sorted(values):
    for index in range(len(values) - 1):
        if values[index] > values[index + 1]:
            return False
    return True

def bogo_sort(values):
    count = 0
    while not is_sorted(values):
        random.shuffle(values)
        count += 1
    return values


values = [1, 31, 42, 5, 41, 52, 41, 52, 14, 254, 14, 24]
sorted = bogo_sort(values)
print(sorted)