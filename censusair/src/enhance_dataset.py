# enhance_dataset.py

import pandas as pd
import numpy as np

time_mapping = {
    "morning": 0,
    "afternoon": 1,
    "evening": 2,
    "night": 3
}


# Load existing data
df = pd.read_csv("data/simulated_data.csv")

# Convert timestamp column to datetime
df['timestamp'] = pd.to_datetime(df['timestamp'])

# Function to map hour to time of day
def get_time_of_day(ts):
    hour = ts.hour
    if 5 <= hour < 12:
        return "morning"
    elif 12 <= hour < 17:
        return "afternoon"
    elif 17 <= hour < 21:
        return "evening"
    else:
        return "night"

# Add time_of_day as an hour (0-23)
df["time_of_day"] = df["timestamp"].apply(get_time_of_day).map(time_mapping)


# Add day_of_week (0=Monday, 6=Sunday)
df['day_of_week'] = df['timestamp'].dt.dayofweek

# Simulate light_level based on time_of_day (brighter in daytime)
df['light_level'] = df['time_of_day'].apply(lambda h: np.random.randint(300, 800) if 7 <= h <= 18 else np.random.randint(0, 300))

# Simulate motion_detected as a binary value
df['motion_detected'] = np.random.randint(0, 2, size=len(df))

# Save the enhanced dataset
df.to_csv("data/simulated_data_enriched.csv", index=False)

print("✅ Dataset enhanced and saved as data/simulated_data_enriched.csv")
