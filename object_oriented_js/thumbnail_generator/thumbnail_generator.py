import os
import tkinter as tk
from tkinter import filedialog, messagebox
from PIL import Image

def create_thumbnails(input_dir, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    for filename in os.listdir(input_dir):
        if filename.lower().endswith(('png', 'jpg', 'jpeg', 'gif', 'bmp')):
            try:
                img_path = os.path.join(input_dir, filename)
                img = Image.open(img_path)
                img.thumbnail((50, 50))
                img.save(os.path.join(output_dir, filename))
                print(f"Thumbnail created for: {filename}")
            except Exception as e:
                print(f"Error processing {filename}: {e}")
    
    messagebox.showinfo("Success", "Thumbnails have been created successfully!")

def select_input_directory():
    input_dir = filedialog.askdirectory()
    input_dir_var.set(input_dir)

def select_output_directory():
    output_dir = filedialog.askdirectory()
    output_dir_var.set(output_dir)

def process_images():
    input_dir = input_dir_var.get()
    output_dir = output_dir_var.get()
    
    if not input_dir or not output_dir:
        messagebox.showerror("Error", "Please select both input and output directories.")
        return
    
    create_thumbnails(input_dir, output_dir)

# Create GUI window
root = tk.Tk()
root.title("Thumbnail Creator")

input_dir_var = tk.StringVar()
output_dir_var = tk.StringVar()

tk.Label(root, text="Select Input Directory:").pack(pady=5)
tk.Entry(root, textvariable=input_dir_var, width=50).pack(pady=5)
tk.Button(root, text="Browse", command=select_input_directory).pack(pady=5)

tk.Label(root, text="Select Output Directory:").pack(pady=5)
tk.Entry(root, textvariable=output_dir_var, width=50).pack(pady=5)
tk.Button(root, text="Browse", command=select_output_directory).pack(pady=5)

tk.Button(root, text="Create Thumbnails", command=process_images).pack(pady=20)

root.mainloop()
