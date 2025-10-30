package main

import "github.com/01-edu/z01"

func main() {
	BPrintComb2()
}

func BPrintComb2() {
    // Pick first number (0 to 98)
    for i := 0; i <= 98; i++ {
        // Pick second number (must be bigger than first)
        for j := i + 1; j <= 99; j++ {
            // Print first number (2 digits)
            z01.PrintRune(rune('0' + i/10))  // tens digit
            z01.PrintRune(rune('0' + i%10))  // units digit
            
            z01.PrintRune(' ')  // space between numbers
            
            // Print second number (2 digits)
            z01.PrintRune(rune('0' + j/10))  // tens digit
            z01.PrintRune(rune('0' + j%10))  // units digit
            
            // Add comma unless it's the last one (98 99)
            if i != 98 || j != 99 {
                z01.PrintRune(',')
                z01.PrintRune(' ')
            }
        }
    }
    z01.PrintRune('\n')
}