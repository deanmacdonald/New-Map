document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM content loaded, initializing map...");
  const map = L.map('map').setView([53.5461, -113.4938], 12); // Set initial coordinates and zoom level

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const icon = L.icon({
    iconUrl: 'path/to/your/icon.png', // Update with the path to your custom icon
    iconSize: [25, 41], // Adjust icon size if necessary
    iconAnchor: [12, 41],
  });

  addGeoJsonData(map, icon); // Call the function to add GeoJSON data
  console.log("Map initialized and GeoJSON data added.");
});

function addGeoJsonData(map, icon) {
  console.log("Adding GeoJSON data...");
  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-113.5263186, 53.4560181], // Kaskitayo Park
        },
        properties: {
          title: 'Kaskitayo Park',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-113.45058, 53.46816], // Millwoods Turf Field
        },
        properties: {
          title: 'Millwoods Turf Field',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-113.485734, 53.565403], // Commonwealth Recreation Centre
        },
        properties: {
          title: 'Commonwealth Recreation Centre',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-113.5263186, 53.523218], // Foote Field (UofA)
        },
        properties: {
          title: 'Foote Field (UofA)',
        },
      },
    ],
  };

  const geoJsonLayer = L.geoJSON(geojson, {
    pointToLayer: (feature, latlng) => L.marker(latlng, { icon: icon }),
    onEachFeature: (feature, layer) => {
      if (feature?.properties?.title) {
        layer.bindPopup(feature.properties.title);
      }
    },
  });

  geoJsonLayer.addTo(map);
  map.fitBounds(geoJsonLayer.getBounds());
  console.log("GeoJSON data added.");
}
