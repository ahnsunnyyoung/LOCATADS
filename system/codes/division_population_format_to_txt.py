import data_dublin_division_list
from dms2dec.dms_convert import dms2dec

result = dict(data_dublin_division_list.dublin_division)
print(result)

f = open('dublin_division_population.txt', 'w' ,encoding='UTF8')
f.write("name")
f.write('\t')
f.write("coordinate")
f.write('\t')
f.write("population")
f.write('\n')

for all_division_name, all_division_name_co in result.items():
  for division in data_dublin_division_list.my_division_population:
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