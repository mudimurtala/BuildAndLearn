




SPEED = 10.44 # Bolt's speed in meters / second
def main():
    time_str = input("Run time (s): ")
    time = float(time_str)
    distance = SPEED * time
    in_kilometers = distance / 1000
    print(f"Bolt can run {distance} meters.")
    print(f"Which is equivalent to {in_kilometers} kilometers")


if __name__ == "__main__":
    main()
