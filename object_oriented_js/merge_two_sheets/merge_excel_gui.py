# Import the pandas library
import pandas as pd

# Step 1: Ask the user for the names of the files
file1 = input("Enter the name of the first Excel file (including extension, e.g., 'file1.xlsx'): ")
file2 = input("Enter the name of the second Excel file (including extension, e.g., 'file2.xlsx'): ")

# Step 2: Read the Excel files and list column headers
try:
    df1 = pd.read_excel(file1)
    df2 = pd.read_excel(file2)
except FileNotFoundError:
    print("One or both files not found. Please make sure the file names are correct.")
    exit(1)

print("\nColumn headers in the first Excel file:")
print(df1.columns.tolist())

print("\nColumn headers in the second Excel file:")
print(df2.columns.tolist())

# Step 3: Ask the user to select the columns to merge on
merge_column1 = input("Enter the name of the column from the first file to merge on: ")
merge_column2 = input("Enter the name of the column from the second file to merge on: ")

# Step 4: Merge the spreadsheets based on the selected columns
try:
    merged_df = pd.merge(df1, df2, left_on=merge_column1, right_on=merge_column2, how='inner')
except KeyError:
    print("One or both merge columns not found. Please make sure the column names are correct.")
    exit(1)

# Step 5: Output a new, merged spreadsheet
output_file = input("Enter the name of the output merged Excel file (including extension, e.g., 'merged.xlsx'): ")
try:
    merged_df.to_excel(output_file, index=False)
    print(f"Merged data saved to {output_file}")
except Exception as e:
    print(f"Error saving the merged data: {e}")
