from ai import call_gpt

def main():
    name = input("Enter your name: ")
    topic = input("Enter a topic: ")

    print("Creating yoyr Haiku...")
    response = call_gpt(f"I want you to turn or create a Haiku for me using {name} and {topic} variables that I entered")

    print(response)

if __name__ == "__main__":
    main()
