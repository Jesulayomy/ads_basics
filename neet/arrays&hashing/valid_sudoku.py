from collections import defaultdict

def print_grid(grid: defaultdict):
    for key, values in grid.items():
        print("Key: ", key, "Values: ", values)


class Solution(object):
    def isValidSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: bool
        """
        grid = defaultdict(set)

        for j in range(len(board)):
            horizontal = set()
            vertical = set()
            for i in range(len(board)):
                if board[j][i] in horizontal and board[j][i] != ".":
                    print(board[j][i])
                    return False
                if board[i][j] in vertical and board[i][j] != ".":
                    print(board[i][j])
                    return False
                if board[i][j] in grid[(i//3, j//3)] and board[i][j] != ".":
                    return False
                grid[(i//3, j//3)].add(board[i][j])
                horizontal.add(board[j][i])
                vertical.add(board[i][j])
        print_grid(grid)
        return True


board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]

soln = Solution()
print(soln.isValidSudoku(board))
