
import requests

location = "53° 25\' 13\" N, 6° 15\' 0\" W"
radius = "400"
type = "restaurant"
KEY = "AIzaSyAW8nmHgkJ9j3nmbQsvLHFYl7LGRVM2LbE"
url = f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={location}&radius={radius}&type=restaurant&keyword=cruise&key={KEY}"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)