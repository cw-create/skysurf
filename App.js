import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Info from "./components/Info.js";

class App extends React.Component {
  state = {
    originTemp: undefined,
    originOtherTemp: undefined,
    originCity: undefined,
    originCountry: undefined,
    originHumidity: undefined,
    originDescription: undefined,
    temperature: undefined,
    otherTemp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    route: undefined,
    error: undefined
  }
  getInfo = async (e) => {
    e.preventDefault();
    const origin_city = e.target.elements.leaveCity.value;
    const origin_country = e.target.elements.leaveCountry.value;
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const origin_api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${origin_city},${origin_country}&appid=30ff84987657bcf09dfc43233b0a4bd2&units=metric`);
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=30ff84987657bcf09dfc43233b0a4bd2&units=metric`);
    const origin_data = await origin_api.json();
    const data = await api_call.json();
    const origin_lon = origin_data.coord.lon;
    const origin_lat = origin_data.coord.lat;
    const dest_lon = data.coord.lon;
    const dest_lat = data.coord.lat;
    const route_api = await fetch(`https://route.ls.hereapi.com/routing/7.2/calculateroute.json?apiKey=q6thnsyXcJJYEv2pRmCICDj-jqG5Ak6AXZcNFsjqxFo&waypoint0=geo!${origin_lat},${origin_lon}&waypoint1=geo!${dest_lat},${dest_lon}&mode=fastest;car;traffic:disabled`);
    const route_data = await route_api.json();
    if (city && country) {
      this.setState({
        originTemp: origin_data.main.feels_like,
        originOtherTemp: origin_data.main.feels_like,
        originCity: origin_data.name,
        originCountry: origin_data.sys.country,
        originHumidity: origin_data.main.humidity,
        originDescription: origin_data.weather[0]. description,
        temperature: data.main.temp,
        otherTemp: data.main.feels_like,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        route: route_data.response.route[0].summary.text,
        error:""
      });
    } else {
      this.setState({
        originTemp: undefined,
        originOtherTemp: undefined,
        originCity: undefined,
        originCountry: undefined,
        originHumidity: undefined,
        originDescription: undefined,
        temperature: undefined,
        otherTemp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        route: undefined,
        error:"Please enter a city and country."
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-3 title-container">
                  <Titles />
                </div>
                <div className="col-xs-9 form-container">
                  <Form getInfo={this.getInfo}/>
                  <Info
                    originTemp={this.state.originTemp}
                    originOtherTemp={this.state.originOtherTemp}
                    originCity={this.state.originCity}
                    originCountry={this.state.originCountry}
                    originHumidity={this.state.originHumidity}
                    originDescription={this.state.originDescription}
                    temperature={this.state.temperature}
                    otherTemp={this.state.otherTemp}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    route={this.state.route}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
};

export default App;
