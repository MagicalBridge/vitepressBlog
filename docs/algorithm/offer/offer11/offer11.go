package main

import (
	"fmt"
)

func main() {
	fmt.Println(7 / 2)
	//  [3,4,5,1,2]
	result := minArray([]int{3, 4, 5, 1, 2})
	fmt.Println(result)

	// [2,2,2,0,1]
	result = minArray([]int{2, 2, 2, 0, 1})
	fmt.Println(result)
}

func minArray(numbers []int) int {
	left, right := 0, len(numbers)-1
	for left < right {
		mid := (left + right) / 2
		if numbers[mid] < numbers[right] {
			right = mid
		} else if numbers[mid] > numbers[right] {
			left = mid + 1
		} else {
			right--
		}
	}
	return numbers[left]
}
