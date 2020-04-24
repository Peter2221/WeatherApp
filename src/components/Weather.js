import React, { Component } from 'react'
import Location from './weatherComponents/Location'
import MainData from './weatherComponents/MainData'
import Wind from './weatherComponents/Wind'
import Info from './weatherComponents/Info'

class Weather extends Component{
    render(){
        const {name, main, wind, weather} = this.props.weatherData;
        return (
            <div className="weather-container">
                <Location location={name}/>
                <MainData main={main} />
                <Wind wind={wind} />
                <Info weather={weather} />
            </div>   
        )
    }
    
}

export default Weather;
