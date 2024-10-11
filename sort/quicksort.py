def quicksort(values):
    """
    Takes best O(log n) - Logarithmic Time
    Takes worst O(n2) - Quadratic Time
    Real Time is closer to best case
    """
    if len(values) <= 1:
        return values
    less_list = []
    great_list = []
    pivot = values[0]
    for value in values[1:]:
        if value <= pivot:
            less_list.append(value)
        else:
            great_list.append(value)
    return quicksort(less_list) + [pivot] + quicksort(great_list)


numbers = [1, 31, 42, 5, 41, 52, 41, 52, 14, 254, 14, 24]
sorted_numbers = quicksort(numbers)
print(sorted_numbers)