package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println(printNumbers(1)) // 输出：[1,2,3,4,5,6,7,8,9]
	fmt.Println(printNumbers(2)) // 输出：[1,2,3,...,98,99]
}

func printNumbers(n int) []int {
	// 计算最大的 n 位数
	max := int(math.Pow10(n))

	// 创建结果切片，长度为 max-1
	res := make([]int, max-1)

	// 填充数组，从1开始到 max-1
	for i := 1; i < max; i++ {
		res[i-1] = i
	}

	return res
}
