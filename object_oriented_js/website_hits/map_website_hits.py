import folium # type: ignore
from geopy.geocoders import Nominatim # type: ignore
import time

def get_coordinates(city):
    """Get latitude and longitude for a given city using geopy."""
    geolocator = Nominatim(user_agent="geo_locator")
    try:
        location = geolocator.geocode(city, timeout=10)
        if location:
            return location.latitude, location.longitude
    except Exception as e:
        print(f"Error getting coordinates for {city}: {e}")
    return None, None

def read_hits_file(filename):
    """Read the website hits file and extract city names and hit counts."""
    city_hits = {}
    with open(filename, 'r') as file:
        for line in file:
            parts = line.strip().split(':')
            if len(parts) == 2:
                city = parts[0].strip()
                try:
                    hits = int(parts[1].strip())
                    city_hits[city] = hits
                except ValueError:
                    print(f"Skipping invalid data: {line.strip()}")
    return city_hits

def generate_map(city_hits):
    """Generate a map with markers for each city showing website hits."""
    world_map = folium.Map(location=[20, 0], zoom_start=2)  # Centered around the world
    
    for city, hits in city_hits.items():
        lat, lon = get_coordinates(city)
        if lat and lon:
            popup_text = f"{city}: {hits} hits"
            folium.Marker([lat, lon], popup=popup_text, tooltip=city).add_to(world_map)
            time.sleep(1)  # Pause to avoid overwhelming the geocoding service
    
    world_map.save("website_hits_map.html")
    print("Map saved as website_hits_map.html")

if __name__ == "__main__":
    filename = "website_hits.txt"
    city_hits = read_hits_file(filename)
    generate_map(city_hits)
