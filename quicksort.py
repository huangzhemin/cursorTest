def quicksort_simple(arr):
    """
    快速排序的简单实现版本（使用额外空间）
    """
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]  # 选择中间元素作为基准
    left = [x for x in arr if x < pivot]  # 小于基准的元素
    middle = [x for x in arr if x == pivot]  # 等于基准的元素
    right = [x for x in arr if x > pivot]  # 大于基准的元素
    
    # 递归对左边部分进行排序，然后连接中间部分（等于基准的元素），最后连接递归排序的右边部分
    return quicksort_simple(left) + middle + quicksort_simple(right)

def quicksort(arr, low=None, high=None):
    """
    快速排序的原地排序版本（不使用额外空间）
    """
    if low is None:
        low = 0
    if high is None:
        high = len(arr) - 1
        
    def partition(low, high):
        """
        分区函数，返回基准元素的最终位置
        """
        pivot = arr[high]  # 选择最右边的元素作为基准
        i = low - 1  # 小于区域的边界
        
        for j in range(low, high):
            # 如果当前元素小于基准，扩展小于区域
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
                
        # 将基准放到正确的位置
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1
    
    if low < high:
        # 获取基准的位置
        pi = partition(low, high)
        
        # 递归排序基准左边的子数组
        quicksort(arr, low, pi - 1)
        # 递归排序基准右边的子数组
        quicksort(arr, pi + 1, high)
    
    return arr

# 测试代码
if __name__ == "__main__":
    # 测试数据
    test_arrays = [
        [64, 34, 25, 12, 22, 11, 90],
        [1],
        [1, 2, 3, 4, 5],
        [5, 4, 3, 2, 1],
        [3, 3, 3, 3],
        []
    ]
    
    print("测试简单版本的快速排序：")
    for arr in test_arrays:
        sorted_arr = quicksort_simple(arr.copy())
        print(f"输入: {arr}")
        print(f"输出: {sorted_arr}\n")
    
    print("测试原地快速排序：")
    for arr in test_arrays:
        arr_copy = arr.copy()
        sorted_arr = quicksort(arr_copy)
        print(f"输入: {arr}")
        print(f"输出: {sorted_arr}\n") 