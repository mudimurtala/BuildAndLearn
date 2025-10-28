# train_model.py

import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import joblib
import os

# Load the enriched dataset
df = pd.read_csv("data/simulated_data_enriched.csv")

# Features and target
features = ['co2_level', 'temperature', 'humidity', 'time_of_day', 'day_of_week', 'light_level', 'motion_detected']
target = 'actual_occupancy'

X = df[features]
y = df[target]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluation
y_pred = model.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
print(f"✅ Model trained. MSE: {mse:.2f}")

# Save model
os.makedirs("models", exist_ok=True)
joblib.dump(model, "models/occupancy_model.pkl")
print("✅ Model saved to models/occupancy_model.pkl")
