"""
Prompts the user for a weight on Earth
and prints the equivalent weight on Mars.
"""

# We use constants!
MARS_MULTIPLE = 0.378

def main():
    earth_weight = float(input("Enter a weight on Earth: "))

    # Having a variable for each piece of information is a good habit
    mars_weight = earth_weight * MARS_MULTIPLE
    rounded_mars_weight = round(mars_weight, 2)


    # Note the string concatenation!
    print(f"The equivalent weight on Mars is: {rounded_mars_weight}")

if __name__ == '__main__':
    main()
