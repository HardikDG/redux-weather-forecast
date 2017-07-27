import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LineChart from '../components/chart'
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const cityName = cityData.city.name;
        const temperature = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={cityName}>
                <td>
                    <GoogleMap lon={lon} lat={lat}/> {cityName}
                </td>
                <td><LineChart data={temperature} color="orange" unit="°C" /></td>
                <td><LineChart data={pressure} color="blue" unit="hPa" /></td>
                <td><LineChart data={humidity} color="green" unit="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weatherData.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weatherData}) {
    return {weatherData};
}

export default connect(mapStateToProps)(WeatherList);