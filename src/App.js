import React from 'react';
import './App.css';
import Header from './components/Header'
import Weather from './components/Weather'
import WeatherSearch from './components/WeatherSearch'

import WeatherState from './context/weather/WeatherState'

const App = () => {
  return (
    <WeatherState>
      <div className="App">
        <div className="container">
          <Header />
          <WeatherSearch />
          <Weather /> 
        </div>
      </div>
    </WeatherState>
  );
}

export default App;
