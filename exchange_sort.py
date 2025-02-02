def exchange_sort(arr):
    # 获取数组长度
    n = len(arr)
    
    # 外层循环，控制比较轮数
    for i in range(n-1):
        # 内层循环，进行元素比较和交换
        for j in range(i+1, n):
            # 如果前面的元素大于后面的元素，则交换
            if arr[i] > arr[j]:
                arr[i], arr[j] = arr[j], arr[i]
    
    return arr

# 测试代码
if __name__ == "__main__":
    # 测试用例
    test_array = [64, 34, 25, 12, 22, 11, 90]
    print("排序前的数组：", test_array)
    
    sorted_array = exchange_sort(test_array)
    print("排序后的数组：", sorted_array) 