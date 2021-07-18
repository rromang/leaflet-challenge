# leaflet-challenge

## Objectives:
This works is done to fulfill the Leaflet assignment for the Data Visualization Bootcamp, specifically, to assess the understanding of the Leaflet/Mapbox topics covered in class.

### Leaflet Step-1
The main assignment was portion was done. All of the requirements for the portion were covered:

1.  The dataset used was https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson.
2.  Map was created. Circle markers have radius that is proportional to the magnitude of the earthquake. 
    ![alt text](images/leaflet_step_1.gif)






2. Labels were created and situated on the bottom and the left of the graph.
3. Graphs visualized in server -- Using the python -m http.server causes an error due to cross origin requests and access control checks. All the visualizations were done with VS Code extension Live Server instead.

## Bonus

Multiples x axis were created, however the multiple y axis as well as the text showing inside the circles were not obtained. The plot was responsive when clicked in the different x axis.
![alt text](images/bonus.gif)

## Final Thoughts

Additional difficulties:
*   When calling the csv in D3 while the csv file was residing inside the assets/data folder, it would not show any data. It was only when the csv file was moved to the same folder level where the index file was located that it worked. More time would be needed to figure out why the file location could have been making a difference.

Overall assessment:
*   The requirements for this assignments were straightforward and narrowly defined. Even with the challenges encountered, the overall purpose for the assignment was achieved and the concepts behind it were illustrated. With some additional time, practice and familiarity with D3, I would expect to overcome some of the difficulties experienced.