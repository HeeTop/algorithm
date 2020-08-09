strs = ["abb","aaa","aaa"]

def longestCommonPrefix(strs):
    zip_strs = zip(*strs)
    res = ''
    for item in zip_strs:
        print(item)
        if len(set(item)) > 1: break
        res += item[0]
    return res
 
print(longestCommonPrefix(strs))