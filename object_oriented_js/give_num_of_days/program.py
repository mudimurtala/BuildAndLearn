import tkinter as tk
from tkinter import messagebox
from datetime import datetime

def calculate_days():
    try:
        date1_str = entry_date1.get()
        date2_str = entry_date2.get()
        
        date1 = datetime.strptime(date1_str, "%m/%d/%Y")
        date2 = datetime.strptime(date2_str, "%m/%d/%Y")
        
        days_diff = abs((date2 - date1).days)
        messagebox.showinfo("Result", f"Number of days between: {days_diff}")
    except ValueError:
        messagebox.showerror("Error", "Please enter dates in MM/DD/YYYY format.")

# Create GUI window
root = tk.Tk()
root.title("Date Difference Calculator")
root.geometry("300x200")

# Labels and entry fields
tk.Label(root, text="Enter first date (MM/DD/YYYY):").pack()
entry_date1 = tk.Entry(root)
entry_date1.pack()

tk.Label(root, text="Enter second date (MM/DD/YYYY):").pack()
entry_date2 = tk.Entry(root)
entry_date2.pack()

# Calculate button
calculate_button = tk.Button(root, text="Calculate", command=calculate_days)
calculate_button.pack()

# Run the application
root.mainloop()
