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


	for i := '0'; i <= '9'; i++ {
		z01.PrintRune(i)
	}
	z01.PrintRune('\n')


	z01.PrintRune('\n')
}



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
