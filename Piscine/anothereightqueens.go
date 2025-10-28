package piscine

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





// Another below


package main

import "github.com/01-edu/z01"

func EightQueens() {
	var board [8]int
	solve(board, 0)
}

func solve(board [8]int, col int) {
	if col == 8 {
		printSolution(board)
		return
	}
	for row := 0; row < 8; row++ {
		if isSafe(board, col, row) {
			board[col] = row
			solve(board, col+1)
		}
	}
}

func isSafe(board [8]int, col, row int) bool {
	for i := 0; i < col; i++ {
		if board[i] == row || board[i]-row == i-col || row-board[i] == i-col {
			return false
		}
	}
	return true
}

func printSolution(board [8]int) {
	for i := 0; i < len(board); i++ {
		z01.PrintRune('1' + rune(board[i]))
	}
	z01.PrintRune('\n')
}
