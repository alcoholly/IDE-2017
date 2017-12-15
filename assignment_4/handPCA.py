#!/usr/local/bin/python

import numpy as np
from sklearn.decomposition import PCA
import csv

# Load csv file
hands     = np.loadtxt('hands.csv', delimiter=',')

# Perform PCA
hands_pca = PCA().fit_transform(hands)

# If there are fewer points than dimensions the PCA will automatically remove some columns.
# They're not needed, but for completeness I readd them
if hands.shape[0]<hands.shape[1]:
    hands_pca = np.append(hands_pca, np.zeros( (hands.shape[0],hands.shape[1]-hands.shape[0])),axis=1)

# Store PCA

with open('hands_pca.csv', 'w') as csvfile:
    writer = csv.writer(csvfile, delimiter=',')
    writer.writerow(['x','y'])
    for line in [h[:2] for h in hands_pca]:
        writer.writerow(line)
