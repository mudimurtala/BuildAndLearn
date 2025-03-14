import wikipediaapi

def get_marketing_sections(brand):
    """Fetches Wikipedia page and extracts sections with 'advertising' or 'marketing'."""
    wiki_wiki = wikipediaapi.Wikipedia(user_agent="ibnmuhyideen95@gmail.com", language="en")
    page = wiki_wiki.page(brand)

    if not page.exists():
        print(f"Page not found for {brand}")
        return None

    sections_to_save = []
    for section in page.sections:
        if "advertising" in section.title.lower() or "marketing" in section.title.lower():
            sections_to_save.append((brand, section.title, section.text))

    return sections_to_save

def main():
    input_file = "coffees.txt"
    output_file = "strategies.txt"

    with open(input_file, "r") as file:
        brands = [line.strip() for line in file if line.strip()]

    with open(output_file, "w") as file:
        for brand in brands:
            sections = get_marketing_sections(brand)
            if sections:
                for brand_name, title, text in sections:
                    file.write(f"Brand: {brand_name}\n")
                    file.write(f"Section: {title}\n")
                    file.write(text + "\n\n")
                    print(f"Saved marketing info for {brand_name}")

if __name__ == "__main__":
    main()
