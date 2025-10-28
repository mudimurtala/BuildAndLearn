print("mathops subpackage loaded")

# Only these modules will be imported if someone uses `from mytools.mathops import *`
__all__ = ["add", "multiply", "subtract"]

# Let's shadow 'subtract' with a function
def subtract(a, b):
    print("Shadowed subtract function running")
    return a - b
