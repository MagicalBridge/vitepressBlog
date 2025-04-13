package main

import "fmt"

func main() {
	// 测试用例
	nums := []int{4, 1, 4, 6}
	fmt.Println(singleNumbers(nums)) // [1, 6]
}

func singleNumbers(nums []int) []int {
	hashMap := make(map[int]int)
	for _, num := range nums {
		if val, ok := hashMap[num]; ok {
			hashMap[num] = val + 1
		} else {
			hashMap[num] = 1
		}
	}
	res := []int{}
	for key, value := range hashMap {
		if value == 1 {
			res = append(res, key)
		}
	}
	return res
}
