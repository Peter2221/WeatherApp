import React from 'react'
import PropTypes from 'prop-types'

const Location = ({ location }) => {
    return (
        <div className="data-box">
            <h2> Location </h2>
            <p>{ location }</p>
        </div>
    )
}

Location.propTypes = {
    location: PropTypes.string.isRequired
}

export default Location;
