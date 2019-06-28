import React from 'react';
import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather"

const Api_Key =  "690c82184fae04f6064be769e5917748";


class WeatherApp extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        isLoaded: false,
        error: undefined
    }

    // getArdi = async () => {
    //     const arduino_call = fetch("http://192.168.1.82:80", {method: "POST", headers: {'content-type': 'application/json'},
    //         body: JSON.stringify({firstParam: 'yourValue', secondParam: 'yourOtherValue'})})
    //
    //     // const arduino_call = fetch('https://mywebsite.com/endpoint/',
    //     //     {method: 'POST',
    //     //         headers: {'Accept': 'application/json', 'Content-Type': 'application/json',},
    //     //         body: JSON.stringify({firstParam: 'yourValue', secondParam: 'yourOtherValue',})})
    // }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metrics`);
        const response = await api_call.json();
        if (city && country ) {
            console.log(response);
            this.setState({
                temperature: response.main.temp,
                city: response.name,
                country: response.sys.country,
                humidity: response.main.humidity,
                description: response.weather[0].description,
                isLoaded: true,
                error: ""
            })
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                isLoaded: "Error loading",
                error: "Please Enter a City and Country"
            })
        }
    }


    render() {
        return(
            <div>
                <Titles/>
                <Form getWeather={this.getWeather}/>
                <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    isLoaded={this.state.isLoaded}
                    error={this.state.error}
                />
            </div>
        );
    }
}
export default WeatherApp;