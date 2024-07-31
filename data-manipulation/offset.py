#Simple python script to offset coordinates from json files

import json
import random

with open('./json/input.json', 'r') as json_file:
    data = json.load(json_file)

#Offsets each Longitude/Latitude in a 2 mile radius
#1 degree = ~60 miles : .1 degree = ~6 miles : .01 = ~.6 miles
# Within .03 degrees or ~1.8 miles of original point
for val in data:
    val['Longitude'] = float(val['Longitude']) + random.uniform(-0.03, 0.03)
    val['Latitude'] = float(val['Latitude']) + random.uniform(0, 0.03)

with open('./json/output.json', 'w') as outfile:
    json.dump(data, outfile)