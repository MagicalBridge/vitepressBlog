package main

import "fmt"

func main() {
	// 测试用例
	s := "We are happy."
	fmt.Println(replaceSpace(s)) // "We%20are%20happy."
}

func replaceSpace(s string) string {
	var res string
	// 遍历字符串 使用range遍历字符串，v是rune类型
	for _, v := range s {
		if v == ' ' {
			res += "%20"
		} else {
			res += string(v)
		}
	}
	return res
}
