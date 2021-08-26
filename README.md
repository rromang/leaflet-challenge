# Leaflet Earthquake Mapping

(leaflet-challenge)

## Objectives:
This works is done to fulfill the Leaflet assignment for the Data Visualization Bootcamp, specifically, to assess the understanding of the Leaflet/Mapbox topics covered in class.


### Leaflet Step-1
The graphs visualized in live server to avoid the problems created by the cross-origin error that results when activating python http.server.

The main assignment was portion was done. All of the requirements for the portion were covered:

1.  The dataset used was https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson.
2.  Map was created. Circle markers have radius that is proportional to the magnitude of the earthquake and the color scheme was darker as the earthquake were deeper.
3.  Popups have the necessary information.
4.  Legend was created. Title for the legend was not achieved via the code attempted.
    ![alt text](images/leaflet_step_1.gif)



## Bonus (Leaflet Step-2)
The graphs visualized in live server to avoid the problems created by the cross-origin error that results when activating python http.server.

1. Same dataset was used as well as the same code that resulted in Step-1.
2. The geoJSON for the tectonic plates was added from https://github.com/fraxen/tectonicplates. The necessary directory was cloned and the json file saved in the folder for the step 2 portion of the assignment.
3. The satellite, darkmap and outdoors map were used for base layers.
4. Unable to add the overlay layer for the tectonic plates that can get activated and deactivated by selecting the layer in the map. The plates layers is constantly visible in all maps.
![alt text](images/leaflet_step_2.gif)


Overall assessment:
*   There were some difficulties in getting the some of bonus portion work completed. Overall, by using the example code from class, the main requirements were successfully completed.
