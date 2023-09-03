
# gives normalizd rate data
def get_normalized_data():
  import pandas as pd
  # read csv
  df = pd.read_csv('C:/Users/user/Desktop/Project/LOCATADS/system/data/dublin_division_population_restaurants.csv', sep=',', encoding='unicode_escape')
  df = df.drop('results_json', axis=1)
  # min-max scaling to population and commercial numbers
  cols = ['population','results_len']
  df[cols] = (df[cols]-df[cols].min())/(df[cols].max()-df[cols].min())
  # print(df.head)
  # <bound method NDFrame.head of      Unnamed: 0          name  ... population  results_len
  # 0             0  Arran Quay A  ...   0.194436         0.80
  # 1             1  Arran Quay B  ...   0.048956         0.25
  # 2             2  Arran Quay C  ...   0.213930         1.00
  # 3             3  Arran Quay D  ...   0.153870         0.65
  # 4             4  Arran Quay E  ...   0.142452         0.60
  # ..          ...           ...  ...        ...          ...
  # 197         197   Whitehall B  ...   0.196391         0.00
  # 198         198   Whitehall C  ...   0.089332         0.60
  # 199         199   Whitehall D  ...   0.132862         0.20
  # 200         200   Wood Quay A  ...   0.119235         1.00
  # 201         201   Wood Quay B  ...   0.170526         1.00
  return df

# gives weather type
def get_current_weather_type():
  # Weather type definition
  # 0 -> sunny
  # 1 -> cloudy
  # 3 -> snowy
  # 4 -> rainy
  weather_code_to_info = {
    "1000": ["Sunny",0],
    "1003": ["Partly cloudy",1],
    "1006": ["Cloudy",1],
    "1009": ["Overcast",1],
    "1030": ["Mist",1],
    "1063": ["Patchy rain possible",1],
    "1066": ["Patchy snow possible",1],
    "1069": ["Patchy sleet possible",1],
    "1072": ["Patchy freezing drizzle possible",1],
    "1087": ["Thundery outbreaks possible",1],
    "1135": ["Fog",1],
    "1147": ["Freezing fog",1],
    "1114": ["Blowing snow",2],
    "1117": ["Blizzard",2],
    "1204": ["Light sleet",2],
    "1207": ["Moderate or heavy sleet",2],
    "1210": ["Patchy light snow",2],
    "1213": ["Light snow",2],
    "1216": ["Patchy moderate snow",2],
    "1219": ["Moderate snow",2],
    "1222": ["Patchy heavy snow",2],
    "1225": ["Heavy snow",2],
    "1237": ["Ice pellets",2],
    "1261": ["Light showers of ice pellets",2],
    "1264": ["Moderate or heavy showers of ice pellets",2],
    "1273": ["Patchy light rain with thunder",2],
    "1276": ["Moderate or heavy rain with thunder",2],
    "1279": ["Patchy light snow with thunder",2],
    "1282": ["Moderate or heavy snow with thunder",2],
    "1150": ["Patchy light drizzle",3],
    "1153": ["Light drizzle",3],
    "1168": ["Freezing drizzle",4],
    "1171": ["Heavy freezing drizzle",4],
    "1180": ["Patchy light rain",4],
    "1183": ["Light rain",4],
    "1186": ["Moderate rain at times",4],
    "1189": ["Moderate rain",4],
    "1192": ["Heavy rain at times",4],
    "1195": ["Heavy rain",4],
    "1198": ["Light freezing rain",4],
    "1201": ["Moderate or heavy freezing rain",4],
    "1240": ["Light rain shower",4],
    "1243": ["Moderate or heavy rain shower",4],
    "1246": ["Torrential rain shower",4],
    "1249": ["Light sleet showers",4],
    "1252": ["Moderate or heavy sleet showers",4],
    "1255": ["Patchy light rain with thunder",4],
    "1258": ["Moderate or heavy rain with thunder",4]}
  IDX_STR = 0
  IDX_TYPE = 1
  current_type = weather_code_to_info[get_current_weather_text()][IDX_TYPE]
  # print(current_type)
  return current_type

def get_current_weather_text():
  import requests
  import json
  location = "Dublin"
  KEY = "3c27d144865443409a8124906231008"
  url = f"http://api.weatherapi.com/v1/current.json?key={KEY} &q={location}&aqi=no"

  payload={}
  headers = {}

  response = requests.request("GET", url, headers=headers, data=payload)
  response = json.loads(response.text)
  # print(response["current"]["condition"]["code"])
  return str(response["current"]["condition"]["code"])

#  gives current loc(test="Merchants Quay D")
def get_current_loc():
  return "Merchants Quay D"

#gives time type
def get_current_time_type():
  # Time type definition
  # 0-6: Midnight -> 0
  # 6-12: Morning -> 1
  # 12-18: Day -> 2
  # 18-0: Night -> 3

  from datetime import datetime
  current_hour = datetime.now().hour
  hour_type = 0 if (0<=current_hour<=6) else 1 if (6<=current_hour<=12) else 2 if (12<=current_hour<=18) else 3 if (18<=current_hour<=24) else 0
  # print(hour_type)
  return hour_type

def check_density_level(density, level):
  is_density_level = 1

  # Bronze
  if(level==0):
    if(density>0.3):
      is_density_level = 0
  # Silver
  elif(level==1):
    if(density>0.6):
      is_density_level = 0
  return is_density_level

def check_commercial_level(commercial, level):
  is_commercial_level = 1

  # Bronze
  if(level==0):
    if(commercial>0.3):
      is_commercial_level = 0
  # Silver
  elif(level==1):
    if(commercial>0.6):
      is_commercial_level = 0
  return is_commercial_level

WEATHER_TYPE = {
  "sunny": 0,
  "cloudy": 1,
  "snowy": 2,
  "rainy": 3
}

TIME_TYPE = {
  "midnight": 0,
  "morning": 1,
  "day": 2,
  "night": 3
}

SERVICE_TYPE = {
  "bronze": 0,
  "silver": 1,
  "gold": 2
}

def calculate(ad_info):
  ad_score = 0

  preferred_weather = WEATHER_TYPE[ad_info["weather"]]
  current_weather = get_current_weather_type()
  binary_score_weather = 1 if (preferred_weather==current_weather) else 0
  # print(binary_score_weather)

  preferred_time = TIME_TYPE[ad_info["time"]]
  current_time = get_current_time_type()
  binary_score_time = 1 if (preferred_time==current_time) else 0
  # print(binary_score_time)

  level = SERVICE_TYPE[ad_info["service_level"]]
  dt = get_normalized_data()
  loc = get_current_loc()
  data = dt[dt['name'].str.contains(loc)]
  density = float(data['population'].to_string(index=False))
  commercial = float(data['results_len'].to_string(index=False))
  # print("This location density is ", density , " and comercial is " , commercial)
  binary_score_density = check_density_level(density, level)
  binary_score_commercial = check_commercial_level(commercial, level)

  weight_weather = 1
  weight_time = 1
  weight_density = 1
  weight_commercial = 1
  score = ((binary_score_weather*weight_weather)+(binary_score_time*weight_time)+(binary_score_density*weight_density)+(binary_score_commercial*weight_commercial))/4
  
  return score

ads_info = [
  {
  "name": "McDonalds: Coffee",
  "weather": "rainy",
  "time": "day",
  "service_level": "gold" 
  },
  {
  "name": "Starbcks",
  "weather": "sunny",
  "time": "day",
  "service_level": "bronze" 
  },
  {
  "name": "H&M",
  "weather": "rainy",
  "time": "night",
  "service_level": "silver" 
  },
  {
  "name": "restaurant1",
  "weather": "sunny",
  "time": "morning",
  "service_level": "bronze" 
  },
  {
  "name": "restaurant2",
  "weather": "rainy",
  "time": "day",
  "service_level": "silver" 
  },
  {
  "name": "restaurant3",
  "weather": "snowy",
  "time": "day",
  "service_level": "bronze" 
  },
]

ad_score_list = []
for ad in ads_info:
  # info = {}
  # info["info"] = ad
  # info["score"] = calculate(ad)
  # ad_score_list.append(info)
  ad_score_list.append((ad["name"],calculate(ad)))

ad_score_list.sort(key=lambda x: x[1], reverse=True)
print(ad_score_list)




