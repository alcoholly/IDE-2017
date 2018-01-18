#!/usr/bin/env python
# -*- coding: utf-8 -*-

import pickle, csv
from iso_codes import iso_codes

pkl_file = open('artists_counts_by_genre.json', 'rb')
data = pickle.load(pkl_file)
pkl_file.close()

all_countries = []
all_genres = []

max = 0

for key in data:
    all_genres.append(key)
    for d in data[key]:
        all_countries.append(d)
        if data[key][d] > max:
            max = data[key][d]
print(all_genres)
with open('out.csv', "wb") as csv_file:
    writer = csv.writer(csv_file, delimiter=',')
    header = ['country']
    for key in data:
        header.append(key)
    writer.writerow(header)

    for country in all_countries:
        line = [iso_codes[country]]
        for genre in all_genres:
            if data[genre].get(country):
                line.append(data[genre][country])
            else:
                line.append(0)
        writer.writerow(line)
