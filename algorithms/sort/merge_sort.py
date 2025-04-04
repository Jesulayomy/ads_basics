def merge_sort(list):
    """
    Sorts a list in ascending order
    Returns a new sorted list
    Divide, find the midpoint and dvivde the list
    Conquer, recursively sort the sublists 
    Combine, merge the sorted sublists
    Time complexity
    Takes O(log n) + Merge sort - Logarithmic time
    Takes O(nlogn) + Merge Always
    Takes O(knlogn) + Sort
    Space Complexity - 
    """
    if len(list) <= 1:
        return list

    left_half, right_half = split(list)

    left = merge_sort(left_half)
    right = merge_sort(right_half)

    return merge(left, right)

def split(list):
    """
    Divide ethe unsorted list at midpoint into sublists
    """
    mid = len(list) // 2
    left = list[:mid]
    right = list[mid:]
    return left, right

def merge(left, right):
    """
    Merges two lists, sorting them in the process
    Returns a new merged list
    runs in overall O(n) time
    """
    merged_list = []
    i = 0
    j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            merged_list.append(left[i])
            i += 1
        else:
            merged_list.append(right[j])
            j += 1
    while i < len(left):
        merged_list.append(left[i])
        i += 1
    while j < len(right):
        merged_list.append(right[j])
        j+= 1
    return merged_list

def verify_sorted(list):
    n = len(list)
    if n == 0 or n == 1:
        return True
    return list[0] < list [1] and verify_sorted(list[1:])

un_list = [1, 31, 42, 5, 41, 52, 41, 52, 14, 254, 14, 24]
sorted = merge_sort(un_list)
print(sorted)