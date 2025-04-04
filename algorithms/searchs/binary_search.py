def binary_search(list: list, target: int) -> int | None:
    """Returns the index position of the target if found, else returns None"""
    first = 0
    last = len(list) - 1

    while first <= last:
        mid = (first + last) // 2 # Floor division
        if list[mid] == target:
            return mid
        elif list[mid] < target:
            first = mid + 1
        else:
            last = mid - 1
    return None

def verify(index):
    if index is not None:
        print("Target found at index: ", index)
    else:
        print("Target not found in list")

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
result = binary_search(numbers, 7)
verify(result)