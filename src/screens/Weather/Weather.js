import React,{useEffect} from 'react';
import './Weather.css';
import ScriptTag from 'react-script-tag';

function Weather() {
    // useEffect(() => {
    //     const script = document.createElement('script');
      
    //     script.src = "../../js/main.js";
    //     script.src = "../../js/moment.js";
    //     script.async = true;
    //     // script.onload = () => scriptLoaded();
      
    //     document.body.appendChild(script);
      
    //     return () => {
    //       document.body.removeChild(script);
    //     }
    //   }, []);
    
    return (
        <div>
            <div className="container contaniner-weather">
        <div className="main-section">
          <div className="search-bar-weather">
            <i className="fas fa-search search-icon-weather" />
            <input type="text" name="search-city" id="search-input" placeholder="Tìm kiếm thành phố: " />
            <span className="microphone">
              <i className="fas fa-microphone" />
              <span className="recording-icon" />
            </span>
          </div>
          <div className="info-wrapper">
            <p className="city-name">Hồ Chí Minh</p>
            <p className="weather-state">Mây thưa</p>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="weather-icon" />
            <p className="temperature">26</p>
          </div>
        </div>
        <div className="additional-section">
          <div className="row">
            <div className="item-weather">
              <div className="label">MT Mọc</div>
              <div className="value sunrise">6:16</div>
            </div>
            <div className="item-weather">
              <div className="label">MT Lặn</div>
              <div className="value sunset">17:57</div>
            </div>
          </div>
          <div className="row">
            <div className="item-weather">
              <div className="label">Độ ẩm</div>
              <div className="value"><span className="humidity">73</span>%</div>
            </div>
            <div className="item-weather">
              <div className="label">Gió</div>
              <div className="value"><span className="wind-speed">5.54</span>km/h</div>
            </div>
          </div>
        </div>
      </div>
      <ScriptTag isHydrating={true} type="text/javascript" src="../../js/main.js" />
      <ScriptTag isHydrating={true} type="text/javascript" src="../../js/moment.js" />
        </div>
        
    )
}

export default Weather
