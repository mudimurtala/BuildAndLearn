import tkinter as tk
from tkinter import filedialog, messagebox
import re

def extract_sentences():
    input_file = filedialog.askopenfilename(title="Select Input File", filetypes=[("Text Files", "*.txt")])
    if not input_file:
        return
    
    keyword = keyword_entry.get().strip()
    if not keyword:
        messagebox.showerror("Error", "Please enter a keyword.")
        return
    
    output_file = filedialog.asksaveasfilename(title="Save Output File As", defaultextension=".txt", filetypes=[("Text Files", "*.txt")])
    if not output_file:
        return
    
    try:
        with open(input_file, "r", encoding="utf-8") as f:
            text = f.read()
        
        sentences = re.split(r'(?<=[.!?])\s+', text)
        matching_sentences = [s for s in sentences if keyword.lower() in s.lower()]
        
        with open(output_file, "w", encoding="utf-8") as f:
            f.write("\n".join(matching_sentences))
        
        messagebox.showinfo("Success", "Sentences extracted and saved successfully.")
    except Exception as e:
        messagebox.showerror("Error", f"An error occurred: {e}")

# Create GUI
root = tk.Tk()
root.title("Sentence Extractor")

tk.Label(root, text="Enter Keyword:").pack(pady=5)
keyword_entry = tk.Entry(root, width=40)
keyword_entry.pack(pady=5)

tk.Button(root, text="Select Files & Extract", command=extract_sentences).pack(pady=10)

root.mainloop()
