document.addEventListener('DOMContentLoaded', () => {
  // Initialize the map
  const map = L.map('map').setView([53.5461, -113.4938], 12);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: ' OpenStreetMap contributors',
  }).addTo(map);

  // Add fullscreen control
  L.control.fullscreen().addTo(map);

  // Example marker
  const marker = L.marker([53.5461, -113.4938]).addTo(map)
    .bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();

  // Function to get directions
  document.getElementById('get-directions').addEventListener('click', getDirections);

  function getDirections() {
    const startLocation = document.getElementById('start-location').value;
    const endLocation = document.getElementById('end-location').value;

    if (!startLocation || !endLocation) {
      alert('Please enter both start and destination locations.');
      return;
    }

    // Placeholder for directions functionality
    alert(Getting directions from  to );
    // Here you would typically call a directions API to get route details
  }
});
