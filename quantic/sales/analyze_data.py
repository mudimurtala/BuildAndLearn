import pandas as pd
import os

def read_sales_data(directory_path):
    """
    Reads data from multiple Excel files in a directory.

    Args:
        directory_path (str): The path to the directory containing Excel files.

    Returns:
        dict: A dictionary where keys are file names and values are DataFrames containing the data.
    """
    # Initialize an empty dictionary to store the data from each file
    data_dict = {}

    # List all files in the directory
    file_list = os.listdir(directory_path)

    # Loop through each file in the directory
    for file_name in file_list:
        # Check if the file is an Excel file
        if file_name.endswith('.xlsx'):
            # Construct the full path to the Excel file
            file_path = os.path.join(directory_path, file_name)

            # Read the Excel file into a DataFrame
            df = pd.read_excel(file_path)

            # Store the DataFrame in the dictionary using the file name as the key
            data_dict[file_name] = df

    return data_dict

# Example usage:
if __name__ == "__main__":
    directory_path = "sales"  # Replace with the path to your sales directory
    sales_data = read_sales_data(directory_path)

    # Now, sales_data is a dictionary where each key is a file name, and each value is a DataFrame containing the data from that file.
    # You can access the data for a specific file like this:
    # data_for_file1 = sales_data["file1.xlsx"]
