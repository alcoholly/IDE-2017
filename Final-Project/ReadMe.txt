'music_Graph.json' is a NetworkX object for python use

'JS_graph.json' is the graph converted to json format for use in js for D3 visualization according to the example found here: https://bl.ocks.org/mbostock/4062045. Two attributes are attached to each node/artist: 
1) 'community' (communities were detected using Louvain algorithm and were mapped to one of the 11 genre-related labels found by last.fm tags):
'metal-grunge-screamo-nu-heavy'
'60s-oldies-motown-50s-40s', 
'east-rap-coast-hop-hip', 
'roll-oldies-60s-heavy-70s', 
"r'n'b-hop-hip-r&b-urban", 
'skitz0rz-sunflower-factor-bitch-uitluisteren', 
'minimal-trip-hop-idm-techno', 
'brit-pop-rock-piano-post', 
'indietronica-folk-revival-post-punk', 
'house-tropical-electro-dj-kygo'
svensk-folk-swedish-alt-country'
2) 'node degree' (the number of links each node creates to the other nodes in the graph)

'most_repr_per_genre.json' contains the top 5 representative artists per community/genre (based on the number of inside community links the nodes form). We should use it in the graph visualization in some way. Maybe create a more compact (smaller) version of the graph as the previous one is too big (590 nodes) and it is difficult to represent the data in a meaningful way.

'artists_counts_by_genre.json' is a dictionary of dictionaries that contains the number of artists liked in each country for each community/genre. 
This file should be used for the map visualizations. We should create 11 map visualizations (1 for each community/genre so that the user can choose the genre he is interested in seeing) wih dots on the countries that their size depends on the number of artists that they are mapped to. We have data for 163 countries in total if in one genre some countries are missing this means that none of the artists in this genre were in the top favorites of this country.