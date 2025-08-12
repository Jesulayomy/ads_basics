
class Solution:
    def isAnagramEz(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)

    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        checker = [0 for _ in range(26)]
        for idx in range(len(s)):
            checker[ord(s[idx]) - ord('a')] += 1
            checker[ord(t[idx]) - ord('a')] -= 1
        for num in checker:
            if num != 0:
                return False
        return True


if __name__ == "__main__":
    s = "anagram"
    t = "nagaram"
    soln = Solution()
    print(soln.isAnagram(s, t))
