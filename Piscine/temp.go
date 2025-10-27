package main

// Write a function that prints, in ascending order and on a single line:
// all unique combinations of three different digits so that, the first digit is lower than the second, and the second is lower than the third.
// These combinations are separated by a comma and a space.

import "github.com/01-edu/z01"

func main() {
	for i := '0'; i <= '9'; i++ {
		for j := '0'; j <= '9'; j++ {
			for k := '0'; k <= '9'; k++ {
				if i == j && j == k {
					continue
				}
				if i >= j || j >= k {
					continue
				}

				z01.PrintRune(i)
				z01.PrintRune(j)
				z01.PrintRune(k)

				if !(i == '7' && j == '8' && k == '9') {
					z01.PrintRune(',')
					z01.PrintRune(' ')
				}

			}
		}
	}
	z01.PrintRune('\n')
}

// hhhhhhhhhh
// gggggggggg
// jjjjjjjjjj
// fmt.Printf("%c%c%c", i, j, k)
// fmt.Printf(", ")
// fmt.Printf("\n")
