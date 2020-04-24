import React from 'react'

function Info({ weather }) {
    const data = weather[0];
    console.log(data);
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

export default Info;
