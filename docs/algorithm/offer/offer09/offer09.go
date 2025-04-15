package main

func main() {
}

type CQueue struct {
	pushStack []int
	popStack  []int
}

func Constructor() CQueue {
	return CQueue{
		pushStack: make([]int, 0),
		popStack:  make([]int, 0),
	}
}
func (this *CQueue) AppendTail(value int) {
	this.pushStack = append(this.pushStack, value)
	if len(this.popStack) == 0 {
		for len(this.pushStack) > 0 {
			this.popStack = append(this.popStack, this.pushStack[len(this.pushStack)-1])
			this.pushStack = this.pushStack[:len(this.pushStack)-1]
		}
	}
}
func (this *CQueue) DeleteHead() int {
	if len(this.popStack) == 0 && len(this.pushStack) == 0 {
		return -1
	} else {
		if len(this.popStack) == 0 {
			for len(this.pushStack) > 0 {
				this.popStack = append(this.popStack, this.pushStack[len(this.pushStack)-1])
				this.pushStack = this.pushStack[:len(this.pushStack)-1]
			}
		}
	}
	res := this.popStack[len(this.popStack)-1]
	this.popStack = this.popStack[:len(this.popStack)-1]
	return res
}
