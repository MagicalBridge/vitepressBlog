package main

func main() {
	// 测试
	nums := []int{2, 3, 1, 0, 2, 5, 3}
	println(findRepeatNumber(nums))
}

func findRepeatNumber(nums []int) int {
	// 使用集合存储已经遇到的数字
	set := make(map[int]bool)
	// 遍历数组
	for _, num := range nums {
		// 如果当前数字已经在集合中，则当前数字就是重复数字
		if set[num] {
			return num
		}
		// 将当前数字加入集合
		set[num] = true
	}
	// 如果没有找到重复数字，则返回 -1
	return -1
}
