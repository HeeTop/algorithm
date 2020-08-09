word = "USA"
def detectCapitalUse(word):
    total_upper = 0
    for char in word[1:]:
        if char.isupper():
            total_upper += 1
    total_upper = sum([1 for char in word[1:] if char.isupper()])
    if total_upper == 0:
        return True
    elif total_upper == len(word[1:]):
        if word[0].isupper():
            return True
        else:
            return False

    return False

print(detectCapitalUse(word))