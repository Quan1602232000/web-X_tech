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
    const [value, setvalue] = useState('')
    const today = new Date();
    const date =today.getDate() + '/' + (today.getMonth() + 1) + '/' +today.getFullYear();
    const time = today.getHours() + ':' + today.getMinutes();

    const getWeather = async (e) => {
        e.preventDefault();
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
            setWindSpeed(data.wind.speed).toFixed(2)
        }
        catch (error) {
            console.log(error);
        }
    }
    const Ikon_Weather = {
        background: `url(${`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}) no-repeat bottom`,
        backgroundSize: "230px",
        display: "block",
        height: "181px",
        width: "230px",
        position: "absolute",
        top: "-25%",
        left: "-10%"
        // height:"1349px"
    }

    return (
        <div class="body_weather container-fluid">
            <div class="weather">
                <form onSubmit={getWeather}>
                    <div class="input-group mb-3 input_search">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                        </div>
                        <input placeholder="Thành Phố :" Value={value} onChange={(e) => setvalue(e.target.value)} type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                    </div>
                </form>
                <div class="weather-grid1">
                    <div class="weather-grid1-pos" style={Ikon_Weather}>
                        <span> </span>
                    </div>
                    <h2>{temperature}<sup class="degree">°</sup><span>C</span></h2>
                    <p>{cityName}</p>
                    <div class="weather-grid1-grids">
                        <div class="weather-grid1-grid-left">
                            {/* <p>40<sup class="degree">°</sup> 20<sup class="degree">°</sup></p> */}
                            <h3>{weatherState ? weatherState : ""}</h3>
                        </div>
                        <div class="weather-grid1-grid-right">
                            <p><span>{time}</span>{date}</p>
                        </div>
                        <div class="clear"> </div>
                    </div>

                </div>
                <div class="weather-grid2">
                    <div class="weather-grid2-left">
                        <img src="https://img.icons8.com/metro/2x/ffffff/sunrise.png" alt=" " class="" />
                        <p>{sunrise}</p>
                    </div>
                    <div class="weather-grid2-left">
                        <img src="https://img.icons8.com/small/2x/ffffff/sunset.png" alt=" " class="img-responsive" />
                        <p>{sunset}</p>
                    </div>
                    <div class="weather-grid2-left">
                        <img src="https://img.icons8.com/android/2x/ffffff/humidity.png" alt=" " class="img-responsive" />
                        <p>{humidity}</p>
                    </div>
                    <div class="weather-grid2-left">
                        <img src="https://img.icons8.com/nolan/2x/ffffff/wind.png" alt=" " class="img-responsive" />
                        <p>{windSpeed}</p>
                    </div>
                    <div class="clear"> </div>
                </div>
                <div class="footer">
                    <p>Copyright © 2015 Sunlight Weather Widget. All rights reserved | Design by <a href="http://w3layouts.com">W3layouts</a></p>
                </div>
            </div>
        </div>

        // <div className="container-weather">
        //     <div className="main-section-weather">
        //         <div className="search-weather-bar">
        //             <i className="fas fa-search search-weather-icon"></i>
        //             <input type="text" name="keyword" id="search-weather-input" placeholder="Tìm kiếm thành phố: " onChange={getWeather}/>
        //             <span className="microphone-weather">
        //                 <i className="fas fa-microphone"></i>
        //                 <span className="recording-icon"></span>
        //             </span>
        //         </div>
        //         <div className="info-wrapper-weather">
        //             <p className="city-name">{cityName}</p>
        //             <p className="weather-state">{weatherState}</p>
        //             <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="weather icon" className="weather-icon" />
        //             <p className="temperature">{temperature}</p>
        //         </div>
        //     </div>
        //     <div className="additional-section-weather">
        //         <div className="row-weather">
        //             <div className="item-weather">
        //                 <div className="label">MT Mọc</div>
        //                 <div className="sunrise">{sunrise}</div>
        //             </div>
        //             <div className="item-weather">
        //                 <div className="label">MT Lặn</div>
        //                 <div className="sunset">{sunset}</div>
        //             </div>
        //         </div>
        //         <div className="row-weather">
        //             <div className="item-weather">
        //                 <div className="label">Độ ẩm</div>
        //                 <div className="humidity"><span className="humidity">{humidity}</span>%</div>
        //             </div>
        //             <div className="item-weather">
        //                 <div className="label">Gió</div>
        //                 <div className="windSpeed"><span className="wind-speed">{windSpeed}</span>km/h</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
export default Weather;