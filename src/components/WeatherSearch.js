import React, { useState, useContext } from 'react'
import WeatherContext from '../context/weather/weatherContext'

const WeatherSearch = () => {
    const weatherContext = useContext(WeatherContext);

    const [city, setCity] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        weatherContext.getData(city);
        setCity('');
    }

    const onChange = (e) => setCity(e.target.value);

    return (
        <form style={formStyle} onSubmit={submitForm}>
            <input 
                type="text"
                name="city" 
                placeholder="Input city"
                value={city}
                onChange={onChange}
                className="city-input"
            />
            <input 
                type="submit" 
                value="Submit"
                className="btn-submit" 
            />
        </form>
    )
  
}

const formStyle = {
    display: 'flex'
}

export default WeatherSearch;