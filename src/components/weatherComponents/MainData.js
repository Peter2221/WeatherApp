import React from 'react'
import PropTypes from 'prop-types'

const MainData = ({ main }) => {
    return (
        <div className="data-box">
            <h2> Main Data </h2>
            <ul className="main-data-display">
                <li> 
                    <h3> Temperature </h3> 
                    <p> 
                        {(parseFloat(main.temp) - 273.15).toPrecision(3)}
                    </p> 
                </li>
                <li>
                     <h3>Feels Like</h3>
                     <p>{(parseFloat(main.feels_like) - 273.15).toPrecision(3)}</p>
                </li>
                <li> 
                    <h3>Temp min</h3> 
                    <p>{(parseFloat(main.temp_min) - 273.15).toPrecision(3)}</p> 
                </li>
                <li> 
                    <h3>Temp max</h3> 
                    <p>{(parseFloat(main.temp_max) - 273.15).toPrecision(3)}</p> 
                </li>
                <li> 
                    <h3>Pressure</h3> 
                    <p>{main.pressure} hPa</p>
                </li>
                <li> 
                    <h3>Humidity</h3> 
                    <p>{main.humidity} %</p>
                </li>
            </ul>
        </div>
    )
}

MainData.propTypes = {
    main: PropTypes.object.isRequired
}

export default MainData;
