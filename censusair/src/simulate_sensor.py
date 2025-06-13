# src/simulate_sensor.py

import csv
import random
from datetime import datetime, timedelta

def generate_simulated_data(num_records=100):
    data = []
    start_time = datetime.now()

    for i in range(num_records):
        timestamp = start_time + timedelta(minutes=5 * i)
        co2 = round(random.gauss(600, 150))
        temp = round(random.gauss(24, 2), 1)
        humidity = round(random.gauss(50, 10), 1)
        occupancy = max(0, int((co2 - 400) / 100))  # rough logic

        data.append([timestamp.strftime('%Y-%m-%d %H:%M:%S'), co2, temp, humidity, occupancy])

    return data


def save_to_csv(data, filename='simulated_data.csv'):
    header = ['timestamp', 'co2_level', 'temperature', 'humidity', 'actual_occupancy']
    with open(filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(header)
        writer.writerows(data)

if __name__ == "__main__":
    data = generate_simulated_data(288)  # 1 day of data at 5-min intervals
    save_to_csv(data)
    print("Simulated data saved to 'simulated_data.csv'")
