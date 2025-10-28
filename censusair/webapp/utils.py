# webapp/utils.py

import joblib
import numpy as np
import pandas as pd

# Categorical encodings
time_mapping = {
    "morning": 0,
    "afternoon": 1,
    "evening": 2,
    "night": 3
}

day_mapping = {
    "Monday": 0,
    "Tuesday": 1,
    "Wednesday": 2,
    "Thursday": 3,
    "Friday": 4,
    "Saturday": 5,
    "Sunday": 6
}

def load_model(model_path="models/occupancy_model.pkl"):
    return joblib.load(model_path)

def make_prediction(model, co2, temp, humidity, time_of_day, day_of_week, light_level, motion_detected):
    input_df = pd.DataFrame([{
        "co2_level": co2,
        "temperature": temp,
        "humidity": humidity,
        "time_of_day": time_of_day,         # should be an integer (0-3)
        "day_of_week": day_of_week,         # should be an integer (0-6)
        "light_level": light_level,         # numeric
        "motion_detected": motion_detected  # 0 or 1
    }])
    return int(round(model.predict(input_df)[0]))
