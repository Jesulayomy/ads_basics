"""
Encode and Decode Strings
- 
https://leetcode.com/problems/encode-and-decode-strings/description/ *PREMIUM QUESTION
Description
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over
the network and is decoded back to the original list of strings.
Please implement encode and decode
Example
Example1
Input: ["lint", "code", "love", "you" ]
Output: ["lint", "code", "love", "you" ]
Explanation:
One possible encode method is: "lint:; code:; love: ; you"
add the length of each string with a delimiter to it, Do I even need the delimiter?
"""
class Solution:
    def encode(self, strs):
        encoded = ""
        for word in strs:
            encoded += str(len(word)) + ';' + word
        return encoded

    def decode(self, strng):
        decoded = []
        index = 0
        max = len(strng)
        if index == max:
            index = -1
        while index >= 0:
            start = index + 2
            next_index = index + int(strng[index]) + 2
            word = strng[start : next_index]
            decoded.append(word)
            index = next_index
            if index >= max:
                index = -1
        return decoded

soln = Solution()

case = ["neet", "code", "rocks"]

codec = soln.encode(case)
print(codec)

decodec = soln.decode(codec)
print(decodec)

decodec = soln.decode("")
print(decodec)
