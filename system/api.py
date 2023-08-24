import requests
import csv
import pandas as pd

# with open('dublin_division_population.txt', 'r') as in_file:
#     stripped = (line.strip() for line in in_file)
#     lines = (line.split("\t") for line in stripped if line)
#     with open('dublin_division_population.csv', 'w') as out_file:
#         writer = csv.writer(out_file)
#         writer.writerow(('name', 'coordinate', 'population'))
#         writer.writerows(lines)

df = pd.read_csv('dublin_division_population.csv')
results_text = []
results_json = []
results_len = []

for index, row in df.iterrows():
  location = row['coordinate']
  radius = "400" #near 400m
  type = "restaurant"
  KEY = "API_KEY"
  url = f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={location}&radius={radius}&type={type}&key={KEY}"

  payload={}
  headers = {}

  response = requests.request("GET", url, headers=headers, data=payload)

  results_text.append(response.text)
  results_json.append(response.json())
  results_len.append(len(response.json()["results"]))

df['results_text'] = results_text
df['results_json'] = results_json
df['results_len'] = results_len

df.to_csv('dublin_division_population_restaurants.csv')


