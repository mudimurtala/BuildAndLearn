"""
File: rolldice.py
------------------
Simulate rolling two dice
"""
import random
NUM_SIDES = 6


def main():
    # setting seed is useful for debugging
    # random.seed(1)
    die1 = random.randint(1, NUM_SIDES)
    die2 = random.randint(1, NUM_SIDES)
    total = die1 + die2
    print("Dice have", NUM_SIDES, "sides each.")
    print("First die:", die1)
    print("Second die:", die2)
    print("Total of two dice:", total)

# This provided line is required at the end of a Python file
# to call the main() function.
if __name__ == '__main__':
    main()