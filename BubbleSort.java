public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        // 获取数组长度
        int n = arr.length;
        
        // 外层循环控制排序轮数
        for (int i = 0; i < n - 1; i++) {
            // 设置标志位，用于判断本轮是否发生交换
            boolean swapped = false;
            
            // 内层循环进行相邻元素比较和交换
            // 每轮结束后，最大的元素会被放到末尾，所以下一轮可以少比较一次
            for (int j = 0; j < n - i - 1; j++) {
                // 如果前一个元素大于后一个元素，则交换它们的位置
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            
            // 如果本轮没有发生交换，说明数组已经有序，可以提前退出
            if (!swapped) {
                break;
            }
        }
    }

    // 打印数组的辅助方法
    public static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    // 主方法，用于测试
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        
        System.out.println("排序前的数组：");
        printArray(arr);
        
        bubbleSort(arr);
        
        System.out.println("排序后的数组：");
        printArray(arr);
    }
} 