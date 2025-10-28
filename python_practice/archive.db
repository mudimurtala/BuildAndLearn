try:
    filename = input("Enter file name: ")
    f = open(filename)  # might cause OSError if file not found
    s = f.readline()    # read first line
    i = int(s.strip())  # might cause ValueError if not a number
    print("You entered number:", i)
except OSError as err:
    print("OS error:", err)
except ValueError:
    print("Could not convert data to an integer.")
except Exception as err:
    print(f"Unexpected error: {err}")
    raise
