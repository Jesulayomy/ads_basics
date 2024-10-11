
def selection_sort(list):
    """
    Takes O(n2) - Quadratic Time
    """
    if len(list) <= 1:
        return list

    sorted = []
    sorts = len(list)
    for i in range(sorts):
        min = 0
        if len(list) <= 1:
            sorted.append(list.pop(min))
            return sorted
        for j in range(1, len(list)):
            if list[min] > list[j]:
                min = j
        sorted.append(list.pop(min))
    return sorted


values = [1, 31, 42, 5, 41, 52, 41, 52, 14, 254, 14, 24]

sorted = selection_sort(values)
print(sorted)