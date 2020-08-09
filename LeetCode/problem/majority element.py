from collections import Counter

nums = [2,2,1,1,1,2,2]
count = Counter(nums)
for x, value in count.items():
    if value > len(nums)//2:
        print(x)