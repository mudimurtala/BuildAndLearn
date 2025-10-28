import tkinter as tk
from tkinter import ttk
from datetime import datetime
import pytz

def convert_time_zone(time_str, from_tz, to_tz):
    """Convert time from one timezone to another."""
    try:
        # Parse user input datetime
        naive_time = datetime.strptime(time_str, "%Y-%m-%d %H:%M:%S")
        
        # Get timezones
        from_zone = pytz.timezone(from_tz)
        to_zone = pytz.timezone(to_tz)
        
        # Localize the time
        localized_time = from_zone.localize(naive_time)
        
        # Convert to target timezone
        converted_time = localized_time.astimezone(to_zone)
        
        return converted_time.strftime("%Y-%m-%d %H:%M:%S %Z")
    except Exception as e:
        return f"Error: {str(e)}"

def on_convert():
    """Handle conversion when button is clicked."""
    time_str = entry_datetime.get()
    from_tz = combo_from.get()
    to_tz = combo_to.get()
    
    result = convert_time_zone(time_str, from_tz, to_tz)
    label_result.config(text=f"Converted Time: {result}")

# GUI Setup
root = tk.Tk()
root.title("Time Zone Converter")
root.geometry("400x300")

# Labels and Inputs
tk.Label(root, text="Enter Date & Time (YYYY-MM-DD HH:MM:SS):").pack(pady=5)
entry_datetime = tk.Entry(root, width=30)
entry_datetime.pack(pady=5)

timezones = pytz.all_timezones

tk.Label(root, text="From Time Zone:").pack(pady=5)
combo_from = ttk.Combobox(root, values=timezones, width=30)
combo_from.pack(pady=5)
combo_from.set("UTC")  # Default selection

tk.Label(root, text="To Time Zone:").pack(pady=5)
combo_to = ttk.Combobox(root, values=timezones, width=30)
combo_to.pack(pady=5)
combo_to.set("America/New_York")  # Default selection

# Convert Button
btn_convert = tk.Button(root, text="Convert", command=on_convert)
btn_convert.pack(pady=10)

# Result Label
label_result = tk.Label(root, text="Converted Time: ", font=("Arial", 12))
label_result.pack(pady=10)

# Run the GUI
root.mainloop()
