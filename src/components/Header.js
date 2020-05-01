import React from 'react'

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1> Weather App </h1>
        </header>
    )
}

const headerStyle = {
    padding: '1.5rem',
    textAlign: 'center',
    background: '#1c2541',
    color: '#fdfffc'
}

export default Header;
