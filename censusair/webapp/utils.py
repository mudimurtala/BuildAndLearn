# webapp/utils.py

import joblib
import numpy as np

def load_model(model_path="/models/occupancy_model.pkl"):
    return joblib.load(model_path)

def make_prediction(model, co2, temp, humidity):
    input_data = np.array([[co2, temp, humidity]])
    prediction = model.predict(input_data)
    return int(round(prediction[0]))
