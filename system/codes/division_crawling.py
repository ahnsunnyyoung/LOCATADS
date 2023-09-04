import data_dublin_division_list
import requests
from bs4 import BeautifulSoup

f = open('dublin_division.txt', 'w' ,encoding='UTF8')
f.write("name")
f.write('\t')
f.write("coordinate")
f.write('\n')

# result = requests.get(url=data_dublin_division_list.href_list[0])
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
for href_index in range(0,len(data_dublin_division_list.href_list)):
    href_name = data_dublin_division_list.href_list[href_index][0]
    href = data_dublin_division_list.href_list[href_index][1]
    for my_index in range(0,len(data_dublin_division_list.my_division_population)):
      my_name = data_dublin_division_list.my_division_population[my_index][0]
      if(my_name==href_name):
        f.write(href_name)
        f.write('\t')
        result = requests.get(url=href)
        bs_obj = BeautifulSoup(result.content, "html.parser")
        bs_obj = bs_obj.prettify()
        bs_obj = bs_obj.split('\n')
        for i in bs_obj:
          if "It is located at" in i:
            i = i.replace("It is located at ","")
            i = i.replace(".","")
            i = i.lstrip()
            i = i.split(",")
            for j in range(0,len(i)):
              i[j] = i[j].lstrip()
            f.write(i[0]+", "+i[1])
        f.write('\n')