# src/predict.py

import joblib
import numpy as np

def load_model(model_path="models/occupancy_model.pkl"):
    return joblib.load(model_path)

def predict_occupancy(model, co2, temp, humidity):
    input_data = np.array([[co2, temp, humidity]])
    prediction = model.predict(input_data)
    return int(round(prediction[0]))

if __name__ == "__main__":
    # Example usage
    model = load_model()
    prediction = predict_occupancy(model, co2=800, temp=25, humidity=55)
    print(f"Predicted occupancy: {prediction} people")
