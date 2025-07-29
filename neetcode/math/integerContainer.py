class IntegerContainerImpl():

    def __init__(self):
        self.container = []

    def add(self, value: int) -> int:
        self.container.append(value)
        return len(self.container)

    def delete(self, value: int) -> bool:
        try:
            bool(self.container.remove(value))
        except ValueError:
            return False
        return True
