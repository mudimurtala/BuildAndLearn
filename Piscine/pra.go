package main

import "github.com/01-edu/z01"

func main() {
	z01.PrintRune('6')
	z01.PrintRune('\n')

	z01.PrintRune('0' + 8)
	z01.PrintRune('\n')

	for i := 'a'; i <= 'z'; i++ {
		z01.PrintRune(i)
	}
	z01.PrintRune('\n')

	for i := 'z'; i >= 'a'; i-- {
		z01.PrintRune(i)
	}
	z01.PrintRune('\n')

	// for i := 0; i <= 9; i++ {
	// 	for j := 0; j <= 9; j++ {
	// 		z01.PrintRune('0' + rune(i))
	// 		z01.PrintRune('0' + rune(j))
	// 		z01.PrintRune(' ')
	// 		z01.PrintRune('0' + rune(i))
	// 		z01.PrintRune('1' + rune(j))
	// 		z01.PrintRune(',')
	// 		z01.PrintRune(' ')
	// 	}
	// }

	for i := 0; i <= 98; i++ {
		for j := i + 1; j <= 99; j++ {
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

	z01.PrintRune('\n')

	for i := 0; i <= 9; i++ {

		z01.PrintRune('0' + rune(i%10))
	}

	z01.PrintRune('\n')
}
