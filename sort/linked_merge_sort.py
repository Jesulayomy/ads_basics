from linked_list import LinkedList

def linked_merge_sort(linked_list: LinkedList):
    """
    Sorts a linked_list in ascending order
    Recursively divide linked list into sublist
    Merge list to produce sorted sublists
    Returns a sorted linked list
    """
    print("\n\n===Linked Merge Sort===")
    if linked_list.size() <= 1:
        return linked_list
    elif linked_list.head is None:
        return linked_list
    print(linked_list.head)
    left_half, right_half = split(linked_list)
    print(left_half.head)
    print(right_half.head)
    left = linked_merge_sort(left_half)
    right = linked_merge_sort(right_half)

    return merge(left, right)


def split(linked_list: LinkedList):
    """
    Splits the linked_list at the midpoint into sub-linked-list
    """
    print("\n++++++ Split ++++++")
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
    print("------ Merge ------")
    merged = LinkedList()
    # Add a fake head
    merged.add(0)
    # Set current to the head of the linked_list
    current = merged.head
    # Get the head nodes for left and right
    left_head = left_half.head
    right_head = right_half.head

    # Iterate over left and right until tail node is reached
    while left_head or right_head:
        # If head node of left is None, we aere past the node
        # Add node from the right to the merged list
        if left_head is None:
            current.next = right_head
            #  Call next on right to set loop condition to false
            right_head = right_head.next
        elif right_head is None:
            current.next = left_head
            # Call next on head to set loop condition to false
            left_head = left_head.next
        else:
            # Not at either tail
            # Obtain node data and compare
            left_data = left_head.data
            right_data = right_head.data
            if left_data < right_data:
                current.next = left_head
                left_head = left_head.next
            # if left is greater, set current
            else:
                current.next = right_head
                right_head = right_head.next
        # Move current to next_node
        current = current.next
    # Discard fake head and set first merged node as head
    head = merged.head.next
    merged.head = head
    print(merged.head)
    return merged


l1 = LinkedList()

l1.add(10)
l1.add(20)
l1.add(30)
l1.add(40)
l1.add(50)
l1.add(60)
l1.add(70)
l1.add(80)
l1.add(90)
l1.add(100)

sorted_linked_list = linked_merge_sort(l1)
print(sorted_linked_list.head)