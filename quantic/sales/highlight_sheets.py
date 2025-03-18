import openpyxl
from openpyxl.styles import PatternFill
from analyze_data import read_sales_data, compare_product_sales
import os

def highlight_sales_difference(excel_file_path):
    # Read the sales data from the Excel files using the analyze_data functions
    sales_data = read_sales_data(excel_file_path)
    comparison_result = compare_product_sales(sales_data)

    # Loop through each Excel file and highlight cells with differing sales in yellow
    for file_name, df in sales_data.items():
        # Construct the full file path using os.path.join
        file_path = os.path.join(excel_file_path, file_name)

        # Open the Excel file using openpyxl
        workbook = openpyxl.load_workbook(file_path)
        sheet = workbook.active

        # ... rest of your code ...

        # Save the modified Excel file
        workbook.save(file_path)

if __name__ == "__main__":
    directory_path = "sales"  # Replace with the path to your sales directory
    highlight_sales_difference(directory_path)
