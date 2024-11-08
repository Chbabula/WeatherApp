import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = async (event) => {
    if (event.key === 'Enter') {
      try {
        const response = await axios.get(url);
        setData(response.data); // This will have all weather information including temp, feels_like, humidity, and wind
        setError('');
      } catch (error) {
        setError('Location not found. Please try another city.');
        setData({});
      }
      setLocation('');
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation} // Changed from onKeyPress to onKeyDown
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        {/* Display error message */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {data.name && (
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main && <h1>{data.main.temp.toFixed()}°F</h1>}
            </div>
            <div className="description">
              {data.weather && <p>{data.weather[0].main}</p>}
            </div>
          </div>
        )}

        {data.main && (
          <div className="bottom">
            <div className="feels">
              <p className="bold">{data.main.feels_like.toFixed()}°F</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className="bold">{data.main.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
