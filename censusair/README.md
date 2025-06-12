# CensusAir 🧠🌬️

**CensusAir** is a smart AI-powered application that estimates the number of people in an indoor space based on CO₂ levels, temperature, and humidity — using simulated sensor data.

## 🌟 What It Does

CensusAir simulates environmental sensor data and uses a trained AI model to predict how many people are in a given area. The app is built with Python and Streamlit, and is ideal for smart building automation, environmental monitoring, or occupancy analysis.

## 🚀 Key Features

- Simulate CO₂, temperature, and humidity sensor data
- Train and evaluate a machine learning model for occupancy detection
- AI pattern recognition using scikit-learn
- Interactive dashboard with real-time data visualization (via Streamlit)
- No physical sensors required — built entirely with software for demo purposes

## 🏗️ Project Structure

censusair/
├── data/ # Simulated dataset
├── models/ # Saved ML model
├── notebooks/ # Jupyter for training and testing
├── src/ # Python modules for logic and ML
├── webapp/ # Streamlit app
├── assets/ # Diagrams or visual media


## 📦 Requirements

All required Python libraries are listed in `requirements.txt`. Install them using:

```bash
pip install -r requirements.txt
```

## ▶️ Running the App

To start the Streamlit app:

```bash
cd webapp
streamlit run app.py
```

## 🎯 Challenge Fit

CensusAir fulfills the challenge requirement of using AI for real-world simulation by identifying occupancy levels based on environmental patterns, without needing physical sensors.

## 👨🏽‍💻 Built With


Python

Pandas, NumPy, scikit-learn

Streamlit

Matplotlib, Plotly

## 📄 License

This project is open-source and developed for educational/challenge purposes.


---

## 📄 `requirements.txt`

```
txt
pandas
numpy
scikit-learn
streamlit
plotly
matplotlib
joblib
```