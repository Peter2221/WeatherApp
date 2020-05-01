import React, { useContext } from 'react'
import Location from './weatherComponents/Location'
import MainData from './weatherComponents/MainData'
import Wind from './weatherComponents/Wind'
import Info from './weatherComponents/Info'

import Loader from './Loader'

import WeatherContext from '../context/weather/weatherContext'

const Weather = () => {
    const weatherContext = useContext(WeatherContext);

    const { weather, isLoaded} = weatherContext;

    if(weather === null){
        return null;
    } else {
        if(isLoaded){
            const {name, main, wind, weather} = weatherContext.weather;

            return (
                <div className="weather-container">
                    <Location location={name}/>
                    <MainData main={main} />
                    <Wind wind={wind} />
                    <Info weather={weather} />
                </div>   
            )
        } else{
            return <Loader />
        }
        
    }
}

export default Weather;
