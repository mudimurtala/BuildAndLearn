import random

def number_guessing_game():
    secret_number = random.randint(1, 100)
    attempts = 7
    
    print("Welcome to the Number Guessing Game!")
    print("I have chosen a number between 1 and 100. You have 7 attempts to guess it correctly.")
    
    for attempt in range(1, attempts + 1):
        try:
            guess = int(input(f"Attempt {attempt}: Enter your guess: "))
            
            if guess < 1 or guess > 100:
                print("Please enter a number between 1 and 100.")
                continue
            
            if guess < secret_number:
                print("Too low! Try again.")
            elif guess > secret_number:
                print("Too high! Try again.")
            else:
                print(f"Congratulations! You guessed the number {secret_number} correctly in {attempt} attempts!")
                return
        except ValueError:
            print("Invalid input. Please enter a valid number.")
    
    print(f"Sorry, you've used all {attempts} attempts. The number was {secret_number}.")

if __name__ == "__main__":
    number_guessing_game()
