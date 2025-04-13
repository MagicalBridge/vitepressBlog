package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func main() {
	// 测试用例
	head := &ListNode{
		Val: 4,
		Next: &ListNode{
			Val: 5,
			Next: &ListNode{
				Val: 1,
				Next: &ListNode{
					Val: 9,
				},
			},
		},
	}
	fmt.Println(deleteNode(head, 5))
}

func deleteNode(head *ListNode, val int) *ListNode {
	if head == nil {
		return nil
	}
	if head.Val == val {
		return head.Next
	}
	// 定义两个指针，一个指针指向当前节点，一个指针指向下一个节点。
	// 如果当前节点的值等于要删除的值，则将下一个节点的值赋给当前节点，然后将下一个节点的下一个节点赋给当前节点的下一个节点。
	// 如果当前节点的值不等于要删除的值，则将当前节点指向下一个节点。
	pre := head
	cur := head.Next

	for cur != nil && cur.Val != val {
		pre = cur
		cur = cur.Next
	}
	if cur != nil {
		pre.Next = cur.Next
	}
	return head
}
