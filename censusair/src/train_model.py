# src/train_model.py

from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
import joblib
from preprocess import load_and_preprocess

def train_and_save_model(csv_path, model_path):
    X, y = load_and_preprocess(csv_path)

    # Split into training and testing
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Train the model
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    # Save the model
    joblib.dump(model, model_path)
    print(f"Model trained and saved to: {model_path}")

if __name__ == "__main__":
    train_and_save_model("data/simulated_data.csv", "models/occupancy_model.pkl")
