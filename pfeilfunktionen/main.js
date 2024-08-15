const cities = [
    { name: "Berlin", citizens: 3645000 },
    { name: "Paris", citizens: 2148000 },
    { name: "New York", citizens: 8419000 },
    { name: "Tokyo", citizens: 13929000 },
    { name: "London", citizens: 8982000 },
    { name: "Moskau", citizens: 12500000 },
    { name: "Sydney", citizens: 5230000 },
    { name: "Mumbai", citizens: 20185000 },
    { name: "Los Angeles", citizens: 3980400 },
    { name: "Rio de Janeiro", citizens: 6748000 }
];

/* const largeCities = cities.filter (city => city.citizens > 9000000)

largeCities.forEach(city => console.log (city.name)); */

// Arrow function
const largeCities = cities.filter(city => city.citizens > 9000000);