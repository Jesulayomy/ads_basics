from linked_list import LinkedList

def linked_merge_sort(linked_list: LinkedList):
    """
    Sorts a linked_list in ascending order
    Recursively divide linked list into sublist
    Merge list to produce sorted sublists
    Returns a sorted linked list
    """
    if linked_list.size() == 0:
        return linked_list
    elif linked_list.head is None:
        return linked_list
    left_half, right_half = split(list)
    left = linked_merge_sort(left_half)
    right = linked_merge_sort(right_half)

    return merge(left, right)


def split(linked_list: LinkedList):
    """
    Splits the linked_list at the midpoint into sub-linked-list
    """
    if linked_list is None or linked_list.head is None:
        left_half = linked_list
        right_half = None
        return left_half, right_half
    else:
        size = linked_list.size()
        mid = size // 2
        mid_node = linked_list.node_at_index(mid - 1)
        left_half = linked_list
        right_half = LinkedList()
        right_half.head = mid_node.next
        mid_node.next = None
        return left_half, right_half


def merge(left_half: LinkedList, right_half: LinkedList):
    """
    Merges linked list and sorts them
    Returns a sorted merged linked_list
    """
    