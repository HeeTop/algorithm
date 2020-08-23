board = '''X X X X
X O O X
X X O X
X O X X'''
board = [x.split(' ') for x in board.splitlines()]
print(board)
from collections import deque

def solution(board):
    ROW = len(board)
    COL = len(board[0])

    visited =  [[0]*COL for x in range(ROW)]
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]

    def bfs(r,c):
        queue = deque()
        # 나중에 전체가 쌓여있는 경우 X로 바꿔주기 위해 경로를 저장하는 리스트
        path =[]
        queue.append([r,c])
        path.append([r,c])
        visited[r][c] = 1
        is_surrounded = True

        while(queue):
            r, c = queue.popleft()
            # 양방향 탐색
            for i in range(4):
                next_r, next_c = r + dx[i], c + dy[i]
                # O가 테두리에 있는 경우
                if next_r < 0 or next_r >= ROW or next_c < 0 or next_c >= COL:
                    is_surrounded = False
                    continue
                # O이면서 아직 방문하지 않은 놈들에 대해서 너비 우선 탐색
                if board[next_r][next_c] == 'O' and visited[next_r][next_c] == 0:
                    queue.append([next_r, next_c])
                    path.append([next_r, next_c])
                    visited[next_r][next_c] = 1
        if is_surrounded:
            for r, c in path:
                board[r][c] = 'X'


    for r in range(ROW):
        for c in range(COL):
            # O이면서 아직 방문하지 않은 놈들에 대해서 너비 우선 탐색
            if board[r][c] == 'O' and visited[r][c] == 0:
            # bfs
                bfs(r,c)

solution(board)
print(board)
