from bs4 import BeautifulSoup
from selenium import webdriver
import time
import requests
import dublin_division_list

f = open('dublin_division.txt', 'w' ,encoding='UTF8')
f.write("name")
f.write('\t')
f.write("coordinate")
f.write('\n')

# result = requests.get(url=dublin_division_list.href_list[0])
# bs_obj = BeautifulSoup(result.content, "html.parser")
# bs_obj = bs_obj.prettify()
# bs_obj = bs_obj.split('\n')
# for i in bs_obj:
#   if "It is located at" in i:
#     i = i.replace("It is located at ","")
#     i = i.replace(".","")
#     i = i.lstrip()
#     i = i.split(",")
#     for j in range(0,len(i)):
#       i[j] = i[j].lstrip()
#     print(i[0]+", "+i[1])


# CRAWLING
# for href_index in range(0,len(dublin_division_list.href_list)):
#     href_name = dublin_division_list.href_list[href_index][0]
#     href = dublin_division_list.href_list[href_index][1]
#     for my_index in range(0,len(dublin_division_list.my_division_population)):
#       my_name = dublin_division_list.my_division_population[my_index][0]
#       if(my_name==href_name):
#         f.write(href_name)
#         f.write('\t')
#         result = requests.get(url=href)
#         bs_obj = BeautifulSoup(result.content, "html.parser")
#         bs_obj = bs_obj.prettify()
#         bs_obj = bs_obj.split('\n')
#         for i in bs_obj:
#           if "It is located at" in i:
#             i = i.replace("It is located at ","")
#             i = i.replace(".","")
#             i = i.lstrip()
#             i = i.split(",")
#             for j in range(0,len(i)):
#               i[j] = i[j].lstrip()
#             f.write(i[0]+", "+i[1])
#         f.write('\n')

# import requests
# location = "53° 25\' 13\" N, 6° 15\' 0\" W"
# radius = "400"
# type = "restaurant"
# KEY = "AIzaSyAW8nmHgkJ9j3nmbQsvLHFYl7LGRVM2LbE"
# url = f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={location}&radius={radius}&type=restaurant&keyword=cruise&key={KEY}"

# payload={}
# headers = {}

# response = requests.request("GET", url, headers=headers, data=payload)

# print(response.text)

from dms2dec.dms_convert import dms2dec

result = dict(dublin_division_list.dublin_division)
print(result)

f = open('dublin_division_population.txt', 'w' ,encoding='UTF8')
f.write("name")
f.write('\t')
f.write("coordinate")
f.write('\t')
f.write("population")
f.write('\n')

for all_division_name, all_division_name_co in result.items():
  for division in dublin_division_list.my_division_population:
    if (all_division_name==division[0]):
      f.write(all_division_name)
      f.write('\t')
      co = all_division_name_co.split(",")
      f.write(str(round(dms2dec(co[0].strip()),6)))
      f.write(",")
      f.write(str(round(dms2dec(co[1].strip()),6)))
      f.write('\t')
      f.write(str(division[1]))
      f.write('\n')

    
