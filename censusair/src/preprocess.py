# src/preprocess.py

import pandas as pd

def load_and_preprocess(filepath):
    """
    Load the CSV file and prepare it for training or prediction.
    """
    df = pd.read_csv(filepath)

    # Drop rows with missing values (basic cleaning)
    df.dropna(inplace=True)

    # Ensure the right columns exist
    required_cols = ['co2_level', 'temperature', 'humidity', 'actual_occupancy']
    if not all(col in df.columns for col in required_cols):
        raise ValueError("Missing required columns in CSV file.")

    # Features and label
    X = df[['co2_level', 'temperature', 'humidity']]
    y = df['actual_occupancy']

    return X, y
