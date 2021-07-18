/// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});


// This will be run when L.geoJSON creates the point layer from the GeoJSON data.


function createFeatures(earthquakeData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  coords = [];
  function onEachFeature(feature, layer) {
    coords.push([feature.geometry.coordinates[1], feature.geometry.coordinates[0]]);
    layer.bindPopup("<h3>" + feature.properties.place +
      "</h3><hr><p>" + new Date(feature.properties.time) + "<hr>" + 'Magnitude: '+ feature.properties.mag + "<hr>" +
      'Depth: '+ feature.geometry.coordinates[2] +"</p>");
  }
  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
   function getColor(d) {
      return d > 30 ? '#ce1256' :
      d > 25 ? '#e7298a' :
      d > 20  ? '#df65b0' :
      d > 15  ? '#c994c7' :
      d > 10   ? '#d4b9da' :
      d > 5   ? '#e7e1ef' :
      d >= 0   ? '#f7f4f9' :
                '#980043';
      }

  var earthquakes = L.geoJSON(earthquakeData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        radius: feature.properties.mag * 3.5,
        fillColor: getColor(feature.geometry.coordinates[2]),
        // fillColor: '#3f007d',
        weight: 2,
        opacity: 1,
        color: '#67001f',
        dashArray: '3',
        fillOpacity: 1
    });
    
  },
  
    onEachFeature: onEachFeature
    
  }
  );

  // Sending our earthquakes layer to the createMap function
  createMap(earthquakes);
}

function createMap(earthquakes) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });

  // var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  //   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  //   maxZoom: 18,
  //   id: "dark-v10",
  //   accessToken: API_KEY
  // });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    // "Dark Map": darkmap
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Earthquakes: earthquakes
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
    layers: [streetmap, earthquakes]
  });

  function getColor(d) {
    return d > 30 ? '#ce1256' :
           d > 25 ? '#e7298a' :
           d > 20  ? '#df65b0' :
           d > 15  ? '#c994c7' :
           d > 10   ? '#d4b9da' :
           d > 5   ? '#e7e1ef' :
           d > 0   ? '#f7f4f9' :
                      '#980043';
}

var legend = L.control({position: 'bottomright'});

  legend.onAdd = function () {
  
      var div = L.DomUtil.create('div', 'info legend'),
          magnitudes = [0, 5, 10, 15, 20, 25, 30],
          labels = [];
  
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < magnitudes.length; i++) {
          div.innerHTML +=
              '<i style="background:' + getColor(magnitudes[i] + 1) + '"></i> ' +
              magnitudes[i] + (magnitudes[i + 1] ? '&ndash;' + magnitudes[i + 1] + '<br>' : '+');
      }
  
      return div;
  };
  
  legend.addTo(myMap);

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}



  
  