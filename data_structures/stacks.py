
class Stack:
    def __init__(self):
        self.stack = []
    def push(self, data):
        self.stack.append(data)
    def pop(self):
        return self.stack.pop()
    def peek(self):
        return self.stack[-1]
    def is_empty(self):
        if len(self.stack) == 0:
            return True
        return False
    def size(self):
        return len(self.stack)
    def search(self, data):
        return len(self.stack) - self.stack.index(data)
    def __repr__(self):
        return f"{self.stack}"

s = Stack()
print(s.is_empty())

s.push(3)
s.push(2)
s.push(7)
s.push(1)

print(s.is_empty())
print(s)
print(s.size())

s.pop()
print(s)
print(s.size())