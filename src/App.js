import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header'
import Weather from './components/Weather'
import WeatherSearch from './components/WeatherSearch'
import Loader from './components/Loader'

class App extends Component{

  constructor(){
    super();
    this.apiKey = "72621661a01afa04eba12af5d3f84e65";
    this.defalutLocation = "Warsaw";
  }

  state = {
    weather: null,
    isLoaded: false
  }

  componentDidMount(){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.defalutLocation}&appid=${this.apiKey}`)
      .then(res => {
        this.setState({
          ...this.state,
          isLoaded: true,
          weather: res.data
        })
      })
      .catch((e) => {
        console.log(e);
      })
  }

  getData = (city) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`)
      .then(res => {
        this.setState({
          ...this.state,
          isLoaded: true,
          weather: res.data
        })
      })
      .catch((e) => {
        console.log(e);
      })
  }

  render(){
    const { isLoaded, weather} = this.state;
    return (
      <div className="App">
        <div className="container">
          <Header />
          <WeatherSearch getData={this.getData}/>
          {
            isLoaded ? 
              <Weather weatherData={weather}/> : 
              <Loader />
          }
        </div>
      </div>
    );
  }
  
}

export default App;
