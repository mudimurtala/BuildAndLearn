import subprocess
import sys
import tkinter as tk
from tkinter import messagebox

def install_package():
    """Installs the package provided by the user."""
    package_name = package_entry.get().strip()

    if not package_name:
        messagebox.showerror("Error", "Please enter a package name.")
        return

    output_text.set(f"Installing {package_name}... Please wait.")

    try:
        subprocess.run([sys.executable, "-m", "pip", "install", package_name], check=True, text=True)
        output_text.set(f"Successfully installed: {package_name}")
        messagebox.showinfo("Success", f"{package_name} installed successfully!")
    except subprocess.CalledProcessError:
        output_text.set(f"Failed to install: {package_name}")
        messagebox.showerror("Error", f"Failed to install {package_name}. Check the package name or your internet connection.")

# Set up the GUI
root = tk.Tk()
root.title("Pip Package Installer")
root.geometry("400x200")

# Package Name Entry
tk.Label(root, text="Enter Package Name:").pack(pady=5)
package_entry = tk.Entry(root, width=40)
package_entry.pack(pady=5)

# Install Button
install_button = tk.Button(root, text="Install Package", command=install_package)
install_button.pack(pady=10)

# Output Message
output_text = tk.StringVar()
output_label = tk.Label(root, textvariable=output_text, fg="blue")
output_label.pack(pady=5)

# Run the GUI
root.mainloop()
