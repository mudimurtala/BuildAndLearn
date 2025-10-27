package piscine

import "github.com/01-edu/z01"

func QuadE(x, y int) {
	if x <= 0 || y <= 0 {
		return
	}

	for row := 1; row <= y; row++ {
		for col := 1; col <= x; col++ {
			if row == 1 && col == 1 {
				z01.PrintRune('A')
			} else if row == 1 && col == x {
				z01.PrintRune('C')
			} else if row == y && col == 1 {
				z01.PrintRune('C')
			} else if row == y && col == x {
				z01.PrintRune('A')
			} else if (row == 1) || (row == y) || (col == 1) || (col == x) {
				z01.PrintRune('B')
			} else {
				z01.PrintRune(' ')
			}
		}
		z01.PrintRune('\n')
	}
}
