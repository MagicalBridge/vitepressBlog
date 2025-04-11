package main

func main() {
	// 测试用例
	matrix := [][]int{
		{1, 4, 7, 11, 15},
		{2, 5, 8, 12, 19},
		{3, 6, 9, 16, 22},
		{10, 13, 14, 17, 24},
		{18, 21, 23, 26, 30},
	}
	result := findNumberIn2DArray(matrix, 5)
	println(result)
}

func findNumberIn2DArray(matrix [][]int, target int) bool {
	// 如果矩阵为空，则返回false
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return false
	}
	// 从矩阵的左下角坐标
	x := 0
	y := len(matrix) - 1
	// 这里使用while循环，循环的条件是不要超出矩阵的边界
	// x 向右递增 坐标从0开始 不要大于矩阵的长度
	// y 从下往上移动，向上递减 不要小于0
	for x < len(matrix[0]) && y >= 0 {
		if matrix[y][x] > target {
			y--
		} else if matrix[y][x] < target {
			x++
		} else {
			return true
		}
	}
	return false
}
