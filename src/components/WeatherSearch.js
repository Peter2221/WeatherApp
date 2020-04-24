import React, { Component } from 'react'

class WeatherSearch extends Component{

    submitForm = (e) => {
        e.preventDefault();
        var value = document.getElementById('text-input').value;
        this.props.getData(value);
        document.getElementById('text-input').value = '';
    }

    render(){
        return (
            <form style={formStyle} onSubmit={this.submitForm}>
                <input 
                    id="text-input"
                    type="text" 
                    placeholder="Input city"
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
}

const formStyle = {
    display: 'flex'
}



export default WeatherSearch;