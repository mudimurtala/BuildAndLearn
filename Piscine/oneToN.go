package main

import "github.com/01-edu/z01"

func oneToN(n int) {
	if n == 0 {
		return
	}
	oneToN(n - 1)
	z01.PrintRune(rune('0' + n))
}

func main() {
	oneToN(5)
	z01.PrintRune('\n')
}
