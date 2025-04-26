
class Node:
    """
    An object for storing a single node of a Linked List
    Models two attributes - data and the link to the next node
    """
    data = None
    next = None
    def __init__(self, data):
        self.data = data
    def __repr__(self):
        return f"{self.data}  ->  {self.next}"

class LinkedList:
    """
    Singly linked list
    """
    def __init__(self):
        self.head = None

    def is_empty(self):
        return self.head is None

    def size(self):
        current = self.head
        count = 0
        while current:
            count += 1
            current = current.next
        return count

    def add(self, data):
        """
        Adds a new node to the Linked List, happens in constant time. (Pre-pend)
        """
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
    
    def search(self, key):
        """
        Finds the node with the data that matches the key
        Returns the node or None if not found
        Linear Time O(n)
        """
        current = self.head
        while current:
            if current.data == key:
                return current
            else:
                current = current.next
        return current

    def insert(self, data, index):
        """
        Inserts a new node containing data at position
        Insertion takes constant O(1) but finding position takes O(n)
        """
        if index == 0:
            self.add(data)
        if index > 0:
            new = Node(data)
            position = index
            current = self.head
            while position > 1:
                current = current.next
                position -= 1
            prev = current
            next = current.next
            prev.next = new
            new.next = next

    def remove(self, key):
        """
        Removes a key from the list
        Takes Linear time
        """
        current = self.head
        previous = None
        found = False
        while current and not found:
            if current.data == key and current is self.head:
                found = True
                self.head = current.next
            elif current.data == key:
                found = True
                previous.next = current.next
            else:
                previous = current
                current = current.next
        return current.data


# Add print statement that shows next and previous pointers
# def remove at index
# def read at index

l1 = LinkedList()
n1 = Node(0)

l1.head = n1
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

n = l1.search(20)
print(n)