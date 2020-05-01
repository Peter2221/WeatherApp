import React from 'react'
import PropTypes from 'prop-types'

const Info = ({ weather }) => {

    const data = weather[0];

    return (
        <div className="data-box">
            <h2> Weather info </h2>
            <ul className="two-col-disp">
                <li> 
                    <h3> Sky </h3>
                    <p> {data.main} </p> 
                </li>
                <li> 
                    <h3> Description </h3>
                    <p> {data.description} </p> 
                </li>
            </ul>
        </div>
    )
}

Info.propTypes = {
    weather: PropTypes.array.isRequired
}

export default Info;
