# webapp/dashboard.py

import matplotlib.pyplot as plt
import pandas as pd
import os
import streamlit as st
from utils import load_model, make_prediction

def run_dashboard():
    st.title("🌍 CensusAir - Real-time Occupancy Estimator")

    st.markdown("Simulate environmental data to estimate how many people are nearby.")

    # Inputs
    co2 = st.slider("CO₂ Level (ppm)", 400, 2000, 800)
    temp = st.slider("Temperature (°C)", 15, 40, 25)
    humidity = st.slider("Humidity (%)", 10, 90, 50)

    if st.button("Predict Occupancy"):
        model = load_model()
        prediction = make_prediction(model, co2, temp, humidity)
        st.success(f"🧍 Estimated Occupancy: **{prediction} people**")

    st.markdown("---")
    st.caption("This is a demo using simulated sensor data and a machine learning model.")

    # Plot historical data if available
    data_file = os.path.join("data", "simulated_data.csv")
    if os.path.exists(data_file):
        df = pd.read_csv(data_file)

        # Convert 'timestamp' to datetime
        df['timestamp'] = pd.to_datetime(df['timestamp'])

        # Plot CO₂ Levels Over Time
        st.subheader("📈 Historical CO₂ Levels")
        fig, ax = plt.subplots()
        ax.plot(df['timestamp'], df['co2_level'], color='green')
        ax.set_title("CO₂ Levels Over Time")
        ax.set_xlabel("Timestamp")
        ax.set_ylabel("CO₂ (ppm)")
        plt.xticks(rotation=45)
        st.pyplot(fig)

        # Plot Occupancy Over Time
        st.subheader("📊 Historical Estimated Occupancy")
        fig2, ax2 = plt.subplots()
        ax2.plot(df['timestamp'], df['actual_occupancy'], color='blue')
        ax2.set_title("Estimated Occupancy Over Time")
        ax2.set_xlabel("Timestamp")
        ax2.set_ylabel("People")
        plt.xticks(rotation=45)
        st.pyplot(fig2)
