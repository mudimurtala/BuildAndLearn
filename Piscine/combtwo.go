package main

// Write a function that prints in ascending order and on a single line:
// all possible combinations of two different two-digit numbers.
// These combinations are separated by a comma and a space.

import "github.com/01-edu/z01"

func main() {
	for l := '0'; l <= '9'; l++ {
		for e := '0'; e <= '9'; e++ {
			z01.PrintRune(l)
			z01.PrintRune(e)

			if !(l == '9' && e == '9') {
				z01.PrintRune(',')
				z01.PrintRune(' ')
			}
		}

	}
	z01.PrintRune('\n')
}
