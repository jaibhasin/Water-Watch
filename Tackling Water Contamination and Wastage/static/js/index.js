// Define the getCurrentLocation function to get the user's current location
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Define the showPosition function to handle the retrieved position
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const locationInput = document.getElementById("location");
    locationInput.value = "Latitude: " + latitude + ", Longitude: " + longitude;
}

var map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India with a zoom level of 5

// Add Mapbox tiles as the base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Example data
var data = [
    { lat: 28.6139, lng: 77.2090, name: "New Delhi" },
    { lat: 19.0760, lng: 72.8777, name: "Mumbai" },
    { lat: 12.9716, lng: 77.5946, name: "Bangalore" },
    { lat: 28.4595, lng: 77.0266, name: "Gurugram" },
    { lat: 28.5355, lng: 77.3910, name: "Noida" },
    { lat: 27.0238, lng: 74.2179, name: "Rajasthan" }
];

// Add markers for each data point
data.forEach(function (item) {
    L.marker([item.lat, item.lng]).addTo(map).bindPopup(item.name);
});