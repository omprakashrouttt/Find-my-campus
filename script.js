const campusCoordinates = [12.823464642553315, 80.04406378018956];
const map = L.map('campusMap').setView(campusCoordinates, 16); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var redIcon = L.icon({
    iconUrl: 'live.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
});

var liveLocationMarker = null; 
let userLocation = null; // To store user's live location for routing
let selectedMarker = null;
let routeControl = null; // To manage the routing control instance

// Locate user's live position
function locateUser() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Show user's position on the map
function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    userLocation = [lat, lon]; // Update user location for routing

    if (liveLocationMarker) {
        liveLocationMarker.setLatLng(userLocation);
    } else {
        liveLocationMarker = L.marker(userLocation, { icon: redIcon }).addTo(map)
            .bindPopup("<b>You are here!</b>").openPopup();
    }
    map.setView(userLocation, 16);
}

// Handle errors in geolocation
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

// Call locateUser to display user's live location
locateUser();
const buildings = {
    "Dental College and Hospital": {
        name: "SRM Dental college", 
        description: "Dental college",
        coordinates: [12.825452011298854, 80.04769646706502] 
    },
    "Dr. T.P Ganesan Auditorium": {
        name: "Dr. T.P Ganesan Auditorium",
        description: "SRM main auditorium",
        coordinates: [12.824861891217196, 80.04698937340734]
    },
    "Dental Ground": {
        name: "Dental Ground",
        description: "Includes gym, courts, and swimming pool",
        coordinates: [12.826044002336586, 80.04956429395291]
    },
    "UB Building": {
        name: "University Building",
        description: "College main building 1",
        coordinates: [12.823578331250665, 80.04231433548229]
    },
    "Tech Park Building": {
        name: "Tech Park Building",
        description: "College main building 2",
        coordinates: [12.824916065968306, 80.04502307532647]
    },
    "Java Green Food Court": {
        name: "Java Food Court",
        description: "Food Court",
        coordinates: [12.82353452552741, 80.0453564325673]
    },
    "Global Hospitals": {
        name: "SRM Global Hospitals",
        description: "SRM PRIVATE HOSPITAL",
        coordinates: [12.823705488379245, 80.0479938220299]
    },
    "Shiva temple": {
        name: "Shiva temple",
        description: "Shiva Temple near KC Girls Hostel",
        coordinates: [12.821417707450737, 80.04475864001178]
    },
    "Arts and Science College": {
        name: "SRM Arts and Science College",
        description: "College Building for Arts and Science Department",
        coordinates: [12.826474716478087, 80.04339213446659]
    },
    "General Hospital": {
        name: "SRM General Hospital",
        description: "Building next to Global hospital",
        coordinates: [12.82185381516468, 80.04876420990425]
    },
    "Auditorium Ground": {
        name: "Auditorium Ground",
        description: "College Ground opposite ",
        coordinates: [12.823635857759225, 80.04541577947599]
    },
    "Hi-Tech Block": {
        name: "SRM Hi-Tech Block",
        description: "Building in Main campus of SRM",
        coordinates: [12.82111646527495, 80.03909266470684]
    },
    "Main Block": {
        name: "SRM Main Block",
        description: "SRM Main Block, where classes of Aerospace, Mechanical, Civil, and other branches occur",
        coordinates: [12.820687624590558, 80.03861620853135]
    },
    "School of Architecture": {
        name: "SRM School of Architecture",
        description: "College Building for Architecture Department",
        coordinates: [12.824232444476113, 80.04423728788599]
    },
    "Sir C V Raman Research Park": {
        name: "Sir C V Raman Research Park",
        description: "Research Park Respective to Semiconductor",
        coordinates: [12.825343339088983, 80.04456847254404]
    },
    "Slice of Life": {
        name: "Slice of Life",
        description: "Cafe/Restaurant near Medical college",
        coordinates: [12.821741703750805, 80.0480123878732]
    },
    "Medical College": {
        name: "SRM Medical College",
        description: "Medical college of SRM",
        coordinates: [12.820595647462175, 80.04875914772657]
    },
    "Ganesh Temple": {
        name: "Om Shri Selva Vinayagar Temple",
        description: "Vinayagar Temple near university building",
        coordinates: [12.82317674186885, 80.04305789534496]
    },
    "BEL Lab": {
        name: "Basic Engineering Lab",
        description: "Basic Engineering Lab, Where lab Classes occur",
        coordinates: [12.823571047679176, 80.04345330063067]
    },
    "College of Management": {
        name: "SRM College of Management",
        description: "College Building for Management Department",
        coordinates: [12.825343339088983, 80.04456847254404]
    },
    "Biotech Block": {
        name: "SRM Biotech Block",
        description: "College Building for Biotechnology Department",
        coordinates: [12.82341976959958, 80.04671795646293]
    },
    "chemical Block": {
        name: "SRM Chemical Block",
        description: "Chemical block of SRM",
        coordinates: [12.824105540523567, 80.04313123032883]
    },
    "Basket Ball Court": {
        name: "SRM Basket Ball Court",
        description: "SRM Basket Ball Court near tech park avenue",
        coordinates: [12.824957606662307, 80.04236657769758]
    },
    "Sai Baba Temple": {
        name: "Sai Baba Temple",
        description: "Sai Baba Temple",
        coordinates: [12.82522914188861, 80.04190961282715]
    },
    "Swimming pool": {
        name: "SRM Swimming Pool",
        description: "College Building for Management Department",
        coordinates: [12.825520031727992, 80.0504998696273]
    },
    "School Of Law": {
        name: "SRM School Of Law",
        description: "College Building for Biotechnology Department",
        coordinates: [12.82585199769794, 80.04705088414643]
    },
    "Paari Block": {
        name: "Paari Block",
        description: "Boys Hostel",
        coordinates: [12.822410559407514, 80.043623608912443]
    },
    "Kaari Block": {
        name: "Kaari Block",
        description: "Boys Hostel",
        coordinates: [12.822323449294178, 80.04340746871232]
    },
    "Oori Block": {
        name: "Oori Block",
        description: "Boys Hostel",
        coordinates: [12.821818659957989, 80.04342529380746]
    },
    "Nelson Mandela Block": {
        name: "Nelson Mandela Block",
        description: "Boys Hostel",
        coordinates: [12.821227437076121, 80.04349183272417]
    },
    "Adhyaman block": {
        name: "Adhyaman block",
        description: "Boys Hostel",
        coordinates: [12.82153313883201, 80.04347599145859]
    },
    "Manoranjitam Block": {
        name: "Manoranjitam Block",
        description: "Boys Hostel",
        coordinates: [12.82053822315579, 80.04386797604829]
    },
    "Mullai Block": {
        name: "Mullai Block",
        description: "Boys Hostel",
        coordinates: [12.820537732452395, 80.04419567900383]
    },
    "Sannasi Block": {
        name: "Sannasi Block",
        description: "Boys Hostel",
        coordinates: [12.82169891630591, 80.04412606279847]
    },
    "Agasthiyar Block": {
        name: "Agasthiyar Block",
        description: "Boys Hostel",
        coordinates: [12.820870652163345, 80.04365700120597]
    },
    "Meenakshi Block": {
        name: "Meenakshi Block",
        description: "Girls Hostel",
        coordinates: [12.822160134519738, 80.04248417451856]
    },
    "Kalpana Chawla Hostel": {
        name: "Kalpana Chawla Hostel",
        description: "Girls Hostel",
        coordinates: [12.820472332278998, 80.04537184844101]
    },
    "M Block": {
        name: "M Block",
        description: "Girls Hostel",
        coordinates: [12.820730482553085, 80.04599822098265]
    },
    "TRS Block": {
        name: "TRS Block",
        description: "Men's Hostel",
        coordinates: [12.826779827824586, 80.04398750050707]
    },
    "College of Pharmacy": {
        name: "SRM College of Pharmacy",
        description: "Building of pharmacy",
        coordinates: [12.824957606662307, 80.04236657769758]
    },
    "Valliammai polytechnic college": {
        name: "SRM Polytechnic College",
        description: "Polytechnic 9",
        coordinates: [12.82522914188861, 80.04190961282715] 
    },
    "hippocrates auditorium": {
        name: "hippocrates auditorium",
        description: "SRM Medical Auditorium", 
        coordinates: [12.820639840808546, 80.0482678778528] 
    },
    "Faraday Hall": {
        name: "Faraday Hall",
        description: "Event Hall in Main Campus", 
        coordinates: [12.820078307675137, 80.03933242829375]
    },
};

// Function to find a building by name and set up directions
function findBuilding() {
    const searchBox = document.getElementById("searchBox").value.trim().toLowerCase();
    const foundBuilding = Object.keys(buildings).find(building => {
        return building.toLowerCase() === searchBox;
    });

    if (foundBuilding) {
        const building = buildings[foundBuilding];
        document.getElementById("buildingInfo").innerText = `${building.name}: ${building.description}`;
        map.setView(building.coordinates, 16);

        // Remove any existing marker or route before adding new ones
        if (selectedMarker) {
            map.removeLayer(selectedMarker);
        }
        if (routeControl) {
            map.removeControl(routeControl);
        }

        // Add marker for selected building
        selectedMarker = L.marker(building.coordinates).addTo(map)
            .bindPopup(`${building.name}`).openPopup();

        // Add directions from user location to the selected building
        if (userLocation) {
            routeControl = L.Routing.control({
                waypoints: [
                    L.latLng(userLocation), // Start from user location
                    L.latLng(building.coordinates) // End at selected building
                ],
                createMarker: () => null, // Disable extra markers
                routeWhileDragging: false
            }).addTo(map);
        } else {
            alert("User location is not available. Please enable location access.");
        }
    } else {
        document.getElementById("buildingInfo").innerText = "Building not found";
    }
}

// Function to show recommendations based on user input
function showRecommendations() {
    const input = document.getElementById('searchBox').value.toLowerCase();
    const recommendations = document.getElementById('recommendations');
    recommendations.innerHTML = ''; 

    if (input === '') {
        return;
    }

    const filteredBuildings = Object.keys(buildings).filter(building => building.toLowerCase().includes(input));
    filteredBuildings.forEach(building => {
        const li = document.createElement('li');
        li.textContent = building;
        recommendations.appendChild(li);
    });

    if (filteredBuildings.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No recommendations found';
        recommendations.appendChild(li);
    }
}

// Handle building selection from recommendations
document.getElementById('recommendations').addEventListener('click', function(e) {
    const selectedBuilding = e.target.textContent;
    const searchBox = document.getElementById('searchBox');
    searchBox.value = selectedBuilding;
    findBuilding();
});

// Call locateUser to display user's live location
locateUser();


