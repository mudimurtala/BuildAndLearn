import itertools

def read_airfare_data(filename="airfare_data.txt"):
    flights = {}
    cities = set()

    with open(filename, "r") as file:
        for line in file:
            line = line.strip()
            if not line or "|" not in line:  # Skip empty or malformed lines
                continue  

            try:
                origin, destination, cost = map(str.strip, line.split("|"))
                cost = int(cost)  # Convert cost to an integer
                
                flights[(origin, destination)] = cost
                cities.update([origin, destination])
            except ValueError:
                print(f"Skipping malformed line: {line}")  # Debugging message

    return flights, list(cities)

def calculate_total_cost(route, flights):
    total_cost = 0
    path_details = []
    
    for i in range(len(route) - 1):
        leg = (route[i], route[i + 1])
        if leg in flights:
            cost = flights[leg]
            total_cost += cost
            path_details.append(f"{route[i]} → {route[i + 1]}: ${cost}")
        else:
            return float("inf"), []  # Invalid route

    return total_cost, path_details

def find_cheapest_route(start_city, flights, cities):
    min_cost = float("inf")
    best_route = []
    best_details = []

    cities.remove(start_city)  # Exclude start city from permutations

    for perm in itertools.permutations(cities):
        route = [start_city] + list(perm) + [start_city]  # Return to start city
        cost, details = calculate_total_cost(route, flights)

        if cost < min_cost:
            min_cost = cost
            best_route = route
            best_details = details

    return best_route, best_details, min_cost

def main():
    filename = "airfare_data.txt"
    flights, cities = read_airfare_data(filename)

    if not flights or not cities:
        print("Error: No valid airfare data found.")
        return

    start_city = input("Enter the starting city: ").strip()
    
    if start_city not in cities:
        print("Error: Starting city not found in data.")
        return

    best_route, best_details, min_cost = find_cheapest_route(start_city, flights, cities)

    if not best_route:
        print("No valid route found.")
        return

    print("\n📌 **Optimal Travel Route:**")
    for detail in best_details:
        print(detail)

    print(f"\n✅ **Total Cost:** ${min_cost}")

if __name__ == "__main__":
    main()
