import requests

def check_website_status(url):
    if not url.startswith(('http://', 'https://')):
        url = 'http://' + url  # Default to http if no protocol is provided
    
    try:
        response = requests.get(url, timeout=5)
        return "up" if response.status_code == 200 else "down"
    except requests.RequestException:
        return "down"

def process_addresses(filename):
    try:
        with open(filename, 'r') as file:
            addresses = file.readlines()
        
        results = []
        for address in addresses:
            address = address.strip()
            if address:
                status = check_website_status(address)
                results.append(f"{address} {status}")
        
        for result in results:
            print(result)
    except FileNotFoundError:
        print(f"Error: {filename} not found.")

if __name__ == "__main__":
    process_addresses("addresses.txt")
