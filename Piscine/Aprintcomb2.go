package main

import "github.com/01-edu/z01"

func main() {
	APrintComb2()
}

func APrintComb2() {
	var i rune
	var j rune
	for i = 0; i <= 98; i++ {
		for j = i + 1; j <= 99; j++ {
			z01.PrintRune('0' + i/10) // first digit of i
			z01.PrintRune('0' + i%10) // second digit of i
			z01.PrintRune(' ')
			z01.PrintRune('0' + j/10) // first digit of j
			z01.PrintRune('0' + j%10) // second digit of j
			if i != 98 || j != 99 {
				z01.PrintRune(',')
				z01.PrintRune(' ')
			}
		}
	}
	z01.PrintRune('\n')
}
