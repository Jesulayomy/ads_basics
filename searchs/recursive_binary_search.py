def r_binary_search(list, target):
    if len(list) == 0:
        return False
    else:
        mid = len(list) // 2
        if list[mid] == target:
            return True
        else:
            if list[mid] < target:
                return r_binary_search(list[mid+1:], target)
            else:
                return r_binary_search(list[:mid], target)

def verify(result):
    if result:
        print("Target found")
    else:
        print("Target not found")

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
result = r_binary_search(numbers, 7)
verify(result)