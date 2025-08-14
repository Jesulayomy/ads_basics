# from in_memory_db import InMemoryDB


# class InMemoryDBImpl(InMemoryDB):
class InMemoryDBImpl():
    def __init__(self):
        self.db = {}
        self.ttl = {}
        pass

    def set(self, timestamp: int, key: str, field: str, value: int) -> None:
        self.set_with_ttl(timestamp, key, field, value, float('inf'))

    def compare_and_set(self, timestamp: int, key: str, field: str, expected_value: int, new_value: int) -> bool:
        return self.compare_and_set_with_ttl(timestamp, key, field, expected_value, new_value, float('inf'))
        
    def compare_and_delete(self, timestamp: int, key: str, field: str, expected_value: int) -> bool:
        if key not in self.db:
            return False
        if field not in self.db[key]:
            return False
        if self.db[key][field] != expected_value:
            return False
        if key in self.ttl and field in self.ttl[key]:
            if self.ttl[key][field] < timestamp:
                return False
        del self.db[key][field]
        return True
        
    def get(self, timestamp: int, key: str, field: str) -> int | None:
        if key in self.ttl and field in self.ttl[key]:
            if self.ttl[key][field] <= timestamp:
                return None
        if key not in self.db:
            return None
        if field not in self.db[key]:
            return None
        return self.db[key][field]

    def scan(self, timestamp: int, key: str) -> list[str]:
        store = []
        if key not in self.db:
            return []
        for k, v in self.db[key].items():
            if key in self.ttl and k in self.ttl[key]:
                if self.ttl[key][k] > timestamp:
                    store.append(f"{k}({self.db[key][k]})")
            else:
                store.append(f"{k}({self.db[key][k]})")
        return sorted(store)
        
    def scan_by_prefix(self, timestamp: int, key: str, prefix: str) -> list[str]:
        store = []
        if key not in self.db:
            return []
        for field in self.db[key]:
            if field.startswith(prefix):
                if key in self.ttl and field in self.ttl[key]:
                    if self.ttl[key][field] > timestamp:
                        store.append(f"{field}({self.db[key][field]})")
        return sorted(store)

    def set_with_ttl(self, timestamp: int, key: str, field: str, value: int, ttl: int) -> None:
        if key not in self.db:
            self.db[key] = dict()
        self.db[key][field] = value
        if key not in self.ttl:
            self.ttl[key] = dict()
        self.ttl[key][field] = timestamp + ttl

    def compare_and_set_with_ttl(self, timestamp: int, key: str, field: str, expected_value: int, new_value: int, ttl: int) -> bool:
        if key not in self.db:
            self.db[key] = dict()
        if field not in self.db[key]:
            return False
        if field in self.db[key]:
            if self.db[key][field] != expected_value:
                return False
        if key not in self.ttl:
            self.ttl[key] = dict()
        if key in self.ttl and field in self.ttl[key]:
            if self.ttl[key][field] < timestamp:
                return False
        self.db[key][field] = new_value
        self.ttl[key][field] = timestamp + ttl
        return True
