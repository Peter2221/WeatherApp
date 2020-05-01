import React, { useReducer } from 'react'
import axios from 'axios';

import WeatherContext from './weatherContext'
import WeatherReducer from './weatherReducer'

import {
  GET_DATA,
  SET_LOADED
} from '../types'

let apiKey = "72621661a01afa04eba12af5d3f84e65";

const WeatherState = (props) => {
  const initialState = {
    weather: null,
    isLoaded: false
  }

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  // get Data
  const getData = async (city) => {
    setLoaded();

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);

    dispatch({
      type: GET_DATA,
      payload: res.data
    })
  }

  // set isLoaded
  const setLoaded = () => dispatch({ type: SET_LOADED});

  return <WeatherContext.Provider
    value = {{
      weather: state.weather,
      isLoaded: state.isLoaded,
      getData,
      setLoaded
    }}>
      {props.children}
  </WeatherContext.Provider>
}

export default WeatherState;