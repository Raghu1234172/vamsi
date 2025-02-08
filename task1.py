def find_min_max(numbers):
    if not numbers:
        return None, None
    min_value=numbers[0]
    max_value=numbers[0]
    for number in numbers:
        if number < min_value:
            min_value = number
        if number > max_value:
            max_value = number
    return min_value, max_value
numbers=[221,55,1,66,8,4,23]
min_value,max_value = find_min_max(numbers)
print("minimum value:",min_value)
print("maximum value:",max_value)