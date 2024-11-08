

Weather App 🌦️
This is a simple weather application built with React and Axios that fetches weather data from the OpenWeather API. Users can enter a city name to get the current weather, temperature, humidity, and wind speed.

Features
Live Weather Search: Enter a city name, and the app fetches and displays real-time weather data for that location.
Error Handling: If the city is not found, an error message prompts the user to try again.
Weather Details: Displays temperature, feels-like temperature, humidity, and wind speed.
Code Structure
App.js: Main component that handles user input, fetches weather data, and displays it on the screen.

State Variables:

data: Stores the fetched weather data.
location: Stores the city name entered by the user.
error: Stores error messages in case of invalid city names.
Components:

Search Bar: Input field to enter the city name.
Weather Display: Displays the location, temperature, description, feels-like temperature, humidity, and wind speed.
Error Message: Shows if the city is not found.


Built With
React
Axios
OpenWeather API
License
This project is open-source and available under the MIT License.