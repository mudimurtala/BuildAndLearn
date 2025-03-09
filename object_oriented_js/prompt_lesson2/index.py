import os

def process_text_files():
    for filename in os.listdir():
        if filename.endswith(".txt") and "processed" not in filename:
            numbers = []
            
            with open(filename, "r") as file:
                for line in file:
                    try:
                        numbers.append(float(line.strip()))
                    except ValueError:
                        continue
            
            numbers.sort()
            output_filename = f"processed_{filename}"
            
            with open(output_filename, "w") as output_file:
                for num in numbers:
                    output_file.write(f"{num}\n")
                output_file.write(f"Sum: {sum(numbers)}\n")
            
            print(f"Processed {filename} -> {output_filename}")

if __name__ == "__main__":
    process_text_files()
