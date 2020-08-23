grid = [
[0]
]
def dfs(grid):
    ROW = len(grid)
    COL = len(grid[0])
    queue = []
    level = 0

    for r in range(ROW):
        for c in range(COL):
            if grid[r][c] == 2:
                queue.append([r,c,0])
    # dfs
    # visited = [[0] * COL for x in range(ROW)]
    dx = [0,0,1,-1]
    dy = [1,-1,0,0]
    while queue:
        # 반복문을 돌때 하나 pop!
        r, c, level = queue.pop(0)
        for i in range(4):
            # 토마토 주변(4방향)을 감염
            next_r = r + dx[i]
            next_c =  c + dy[i]
            # 격자를 넘어가면 안됨 + 벽인 경우 제외
            if next_r < 0 or next_c < 0 or next_r >= ROW or next_c >= COL or grid[next_r][next_c] == 0:
                continue
            # 이미 썩은 경우 제외
            if grid[next_r][next_c] == 2:
                continue
            queue.append([next_r, next_c, level + 1])
            grid[next_r][next_c] = 2

    for r in range(ROW):
        for c in range(COL):
            if grid[r][c] == 1:
                level = -1
    return level

print(dfs(grid))