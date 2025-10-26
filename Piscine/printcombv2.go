package main

import "github.com/01-edu/z01"

// Entry point
func main() {
	PrintComb()
}

// Main combination printer
func PrintComb() {
	for i := '0'; i <= '9'; i++ {
		for j := '0'; j <= '9'; j++ {
			for k := '0'; k <= '9'; k++ {

				if isAllEqual(i, j, k) {
					continue
				}
				if isNotAscending(i, j, k) {
					continue
				}

				printCombination(i, j, k)

				if !isLastCombination(i, j, k) {
					printSeparator()
				}
			}
		}
	}
	z01.PrintRune('\n')
}

// --- Helper functions --- //

// Check if all digits are equal
func isAllEqual(i, j, k rune) bool {
	return i == j && j == k
}

// Check if digits are not in ascending order
func isNotAscending(i, j, k rune) bool {
	return i >= j || j >= k
}

// Check if this is the last combination (789)
func isLastCombination(i, j, k rune) bool {
	return i == '7' && j == '8' && k == '9'
}

// Print a single combination
func printCombination(i, j, k rune) {
	z01.PrintRune(i)
	z01.PrintRune(j)
	z01.PrintRune(k)
}

// Print separator (comma + space)
func printSeparator() {
	z01.PrintRune(',')
	z01.PrintRune(' ')
}
