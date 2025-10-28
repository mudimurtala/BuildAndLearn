package main

import "github.com/01-edu/z01"

const size = 8

var board [size]int // board[x] = y means queen at column x, row y

func isSafe(x, y int) bool {
	for i := 0; i < x; i++ {
		if board[i] == y || board[i]-i == y-x || board[i]+i == y+x {
			return false
		}
	}
	return true
}

func printSolution() {
	for i := 0; i < size; i++ {
		z01.PrintRune(rune(board[i]) + '1')
	}
	z01.PrintRune('\n')
}

func placeQueen(x int) {
	if x == size {
		printSolution()
		return
	}
	for y := 0; y < size; y++ {
		if isSafe(x, y) {
			board[x] = y
			placeQueen(x + 1)
		}
	}
}

func EightQueens() {
	placeQueen(0)
}
