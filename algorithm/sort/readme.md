[什么是冒泡排序？]

- 冒泡排序  Bubble Sort
    1. 排序
       1. 很多种
    2. 交换
    3. 相邻  i < i+1  不换，佛否则换？
    4. 有序区域  j < length-i-1   优化
    5. 稳定排序  算法的可靠性
    6. 边界？ 最后交换的位置
   
    - 交换排序（位置，从小到大，从大到小）


- 最大值和最小值， 不能传整个数组
  - Math.min()  Math.max()
  - sort()  js内置的排序方法

- 如何写出一个高质量的冒泡排序
    1. 当在一次冒泡的内层循环中，一次交换都没有发生
        通过检查本轮是否有发生交换？  如果没有，待排序区域已有序，则退出  isSorted 布尔值
    2. 基于isSorted 布尔值优化
       1. 如果后半段 有序，还可以再优化

