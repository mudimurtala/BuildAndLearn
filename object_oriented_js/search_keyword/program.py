import tkinter as tk
from tkinter import filedialog

# Function to find and save sentences with a keyword
def find_and_save_sentences():
    # Get the selected input file path from the GUI
    input_file_path = filedialog.askopenfilename(filetypes=[("Text Files", "*.txt")])

    # Get the keyword from the GUI entry widget
    keyword = keyword_entry.get()

    # Get the selected output file path from the GUI
    output_file_path = filedialog.asksaveasfilename(filetypes=[("Text Files", "*.txt")])

    # Ensure that all required fields are filled
    if not input_file_path or not keyword or not output_file_path:
        result_label.config(text="Please fill in all fields.")
        return

    try:
        with open(input_file_path, 'r') as input_file, open(output_file_path, 'w') as output_file:
            sentences = input_file.read().split('.')
            for sentence in sentences:
                if keyword in sentence:
                    output_file.write(sentence + '.\n')
        
        result_label.config(text="Sentences with the keyword saved successfully.")
    except Exception as e:
        result_label.config(text="An error occurred: " + str(e))

# Create the main window
root = tk.Tk()
root.title("Sentence Finder")

# Create and place GUI elements
input_label = tk.Label(root, text="Select Input File:")
input_label.pack()
keyword_label = tk.Label(root, text="Enter Keyword:")
keyword_label.pack()
keyword_entry = tk.Entry(root)
keyword_entry.pack()
output_label = tk.Label(root, text="Select Output File:")
output_label.pack()
find_button = tk.Button(root, text="Find and Save Sentences", command=find_and_save_sentences)
find_button.pack()
result_label = tk.Label(root, text="")
result_label.pack()

# Start the GUI main loop
root.mainloop()