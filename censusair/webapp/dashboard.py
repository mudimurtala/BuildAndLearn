# webapp/dashboard.py

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
