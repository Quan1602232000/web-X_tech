import React, { useState, useEffect } from 'react';
import './Weather.css';
import moment from 'moment';

const APP_ID = 'cb8b4de59a5f1eb403da5e70687ae330';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'vi-VI'

function Weather() {
  const [cityName, setCityName] = useState("City");
  const [weatherState, setWeatherState] = useState("Weather");
  const [weatherIcon, setWeatherIcon] = useState("Icon");
  const [temperature, setTemperature] = useState("00");
  const [sunrise, setSunrise] = useState("00");
  const [sunset, setSunset] = useState("00");
  const [humidity, setHumidity] = useState("00");
  const [windSpeed, setWindSpeed] = useState("00");
  const [isListening, setIsListening] = useState(false);
  const [value, setValue] = useState('');
  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setValue(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  const getWeather = async (e) => {
    e.preventDefault();
    const promise = new Promise(function (resolve, reject) {
      resolve(setValue(e.target.value),
      
      );

    })
    try {
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${APP_ID}&units=metric&lang=vi`);
      const data = await api_call.json();
      setCityName(data.name)
      setWeatherState(data.weather[0].description)
      setWeatherIcon(data.weather[0].icon)
      setTemperature(Math.round(data.main.temp))
      setSunrise(moment.unix(data.sys.sunrise).format("H:mm"))
      setSunset(moment.unix(data.sys.sunset).format("H:mm"))
      setHumidity(data.main.humidity)
      setWindSpeed(data.wind.speed * 3.6).toFixed(2)
    }
    catch (error) {
      console.log(error);
    }
    // promise.then(
    //   function () {
        
    //   });   
  }

  return (
    <div className="container-weather">
      <div className="main-section">
        <div className="search-bar">
          <i className="fas fa-search search-icon"></i>
          <input type="text" name="keyword" id="search-input" value={value} placeholder="Tìm kiếm thành phố: " onChange={getWeather} />
          <span className="microphone">
            {isListening ?
              <span onClick={() => setIsListening(prevState => !prevState)}>🛑</span>
              : <span onClick={() => setIsListening(prevState => !prevState)}>🎙️</span>}
          </span>
        </div>
        <div className="info-wrapper">
          <p className="city-name">{cityName}</p>
          <p className="weather-state">{weatherState}</p>
          <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="weather icon" className="weather-icon" />
          <p className="temperature">{temperature}</p>
        </div>
      </div>
      <div className="additional-section">
        <div className="row">
          <div className="item">
            <div className="label">MT Mọc</div>
            <div className="sunrise">{sunrise}</div>
          </div>
          <div className="item">
            <div className="label">MT Lặn</div>
            <div className="sunset">{sunset}</div>
          </div>
        </div>
        <div className="row">
          <div className="item">
            <div className="label">Độ ẩm</div>
            <div className="humidity"><span className="humidity">{humidity}</span>%</div>
          </div>
          <div className="item">
            <div className="label">Gió</div>
            <div className="windSpeed"><span className="wind-speed">{windSpeed}</span>km/h</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Weather;