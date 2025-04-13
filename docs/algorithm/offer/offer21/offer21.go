package main

import "fmt"

func main() {
	// 测试用例
	nums := []int{1, 2, 3, 4}
	fmt.Println(exchange(nums)) // [1, 3, 2, 4]
}

func exchange(nums []int) []int {
	start, end := 0, len(nums)-1
	for start < end {
		for start < end && nums[start]%2 != 0 {
			start++
		}
		for start < end && nums[end]%2 == 0 {
			end--
		}
		nums[start], nums[end] = nums[end], nums[start]
	}
	return nums
}
