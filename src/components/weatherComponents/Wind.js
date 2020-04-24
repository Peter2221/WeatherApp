import React from 'react'

function Wind({wind}) {
    return (
        <div className="data-box">
            <h2> Wind </h2>
            <ul className="two-col-disp">
                <li> 
                    <h3> Speed </h3> 
                    <p> {wind.speed} km/h </p>
                </li>
                <li> 
                    <h3> Degrees  </h3> 
                    <p> {wind.deg} </p>
                </li>
            </ul>
        </div>
    )
}

export default Wind;
