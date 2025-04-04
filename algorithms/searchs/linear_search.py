def linear_search(list: list, target: int) -> int | None:
    """Returns the index position of the target if found, else returns None"""
    for i in range(0, len(list)):
        if list[i] == target:
            return i
    return None

def verify(index):
    if index is not None:
        print("Target found at index: ", index)
    else:
        print("Target not found in list")

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
result = linear_search(numbers, 7)
verify(result)