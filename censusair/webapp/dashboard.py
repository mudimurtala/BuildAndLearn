# webapp/dashboard.py

from datetime import datetime
import altair as alt
import pandas as pd
import streamlit as st
from utils import load_model, make_prediction, time_mapping, day_mapping
import os

# -------------------------
def log_prediction(co2, temp, humidity, prediction):
    """Log the prediction to a CSV file for historical tracking."""
    log_file = "data/prediction_log.csv"
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = pd.DataFrame([{
        "timestamp": now,
        "co2_level": co2,
        "temperature": temp,
        "humidity": humidity,
        "predicted_occupancy": prediction
    }])
    if not os.path.exists(log_file):
        log_entry.to_csv(log_file, index=False)
    else:
        log_entry.to_csv(log_file, mode='a', header=False, index=False)

# -------------------------


def run_dashboard():
    st.set_page_config(page_title="CensusAir", layout="wide")
    st.title("🌍 CensusAir - Real-time Occupancy Estimator")

    st.markdown("Simulate environmental data to estimate how many people are nearby.")

    # Create two columns with fixed width ratio
    left_col, right_col = st.columns([1, 2], gap="large")

    with left_col:
        with st.container():  # Enclose in a container to help match height
            st.subheader("🛠️ Input Controls")
            co2 = st.slider("CO₂ Level (ppm)", 400, 2000, 800)
            temp = st.slider("Temperature (°C)", 15, 40, 25)
            humidity = st.slider("Humidity (%)", 10, 90, 50)
            light_level = st.slider("Light Level (%)", 0, 100, 70)
            time_of_day_label = st.selectbox("Time of Day", ["morning", "afternoon", "evening", "night"])
            day_of_week_label = st.selectbox("Day of Week", ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])
            motion_detected = st.checkbox("Motion Detected?", value=True)

            # Convert to numeric using the mappings
            time_of_day = time_mapping[time_of_day_label]
            day_of_week = day_mapping[day_of_week_label]

            if st.button("Predict Occupancy"):
                model = load_model()
                prediction = make_prediction(
                    model, co2, temp, humidity,
                    time_of_day, day_of_week,
                    light_level, int(motion_detected)
                )

                # Show prediction
                st.metric("🧍 Estimated Occupancy", f"{prediction} people")
                st.toast("Prediction complete 🎉")

                # Log it after prediction is made
                log_prediction(co2, temp, humidity, prediction)

            # Add vertical space to make this column taller to match right_col
            st.markdown("<div style='height: 500px'></div>", unsafe_allow_html=True)

    with right_col:
        with st.container():
            st.subheader("📊 Historical CO₂ Levels")
            co2_data = pd.read_csv("data/simulated_data.csv")
            co2_data['timestamp'] = pd.to_datetime(co2_data['timestamp'])

            co2_chart = alt.Chart(co2_data).mark_line(color="green").encode(
                x=alt.X('timestamp:T', title='Time'),
                y=alt.Y('co2_level:Q', title='CO₂ Level (ppm)'),
                tooltip=['timestamp:T', 'co2_level:Q']
            ).properties(height=250)

            st.altair_chart(co2_chart, use_container_width=True)

            st.subheader("📈 Historical Estimated Occupancy")
            occupancy_chart = alt.Chart(co2_data).mark_line(color="orange").encode(
                x=alt.X('timestamp:T', title='Time'),
                y=alt.Y('actual_occupancy:Q', title='People Count'),
                tooltip=['timestamp:T', 'actual_occupancy:Q']
            ).properties(height=250)

            st.altair_chart(occupancy_chart, use_container_width=True)

        # Optional horizontal line
        st.markdown("---")
    