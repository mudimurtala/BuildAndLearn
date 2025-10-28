#  Fibonacci numbers module

def fib(n):
    """Write Fibonacci series up to n"""
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()

def fib2(n):
    """Return Fibonacci series up to n."""
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        a, b = b, a+b
    return result


print(__name__)
print("This module is loaded!")


if __name__ == "__main__":
    import sys
    fib(int(sys.argv[1]))