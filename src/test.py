import requests
import xml.etree.ElementTree as ET
import pandas as pd

# URLs containing the XML data
urls = [
    "https://donneesouvertes.affmunqc.net/role/RL73005_2024.xml",
    "https://donneesouvertes.affmunqc.net/role/RL72005_2024.xml"
]

def fetch_and_parse_xml(url):
    """Fetches XML data from a URL and parses it into an ElementTree object."""
    response = requests.get(url)
    xml_data = response.content
    return ET.fromstring(xml_data)

def extract_data(tree):
    """Extracts relevant data from the XML ElementTree object."""
    # Example extraction logic (adjust based on actual XML structure)
    properties = []
    owners = []
    values = []
    
    for elem in tree.findall('.//Property'):  # Assuming 'Property' is a relevant tag
        property_data = {
            'PropertyID': elem.find('PropertyID').text,
            'Address': elem.find('Address').text,
            # Add more fields as per the relational model
        }
        properties.append(property_data)
        
        # Similarly extract owner and value data
        # This might involve navigating nested elements within each Property
        
    return properties, owners, values

def main():
    all_properties = []
    all_owners = []
    all_values = []
    
    for url in urls:
        tree = fetch_and_parse_xml(url)
        properties, owners, values = extract_data(tree)
        all_properties.extend(properties)
        all_owners.extend(owners)
        all_values.extend(values)
    
    # Convert lists to DataFrames (or directly to CSV files)
    properties_df = pd.DataFrame(all_properties)
    owners_df = pd.DataFrame(all_owners)
    values_df = pd.DataFrame(all_values)
    
    # Example of saving to CSV
    properties_df.to_csv('properties.csv', index=False)
    owners_df.to_csv('owners.csv', index=False)
    values_df.to_csv('values.csv', index=False)

if __name__ == "__main__":
    main()
