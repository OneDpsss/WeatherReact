import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function CurrentWeather() {
    const { latestWeatherData, unit } = useContext(WeatherContext);

    if (!latestWeatherData?.current) return null;

    const { main, weather, name } = latestWeatherData.current;
    const temp = Math.round(main.temp);
    const unitSymbol = unit === 'metric' ? '°C' : '°F';

    return (
        <div className="current-weather">
            <h2>{name}</h2>
            <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt={weather[0].description}
            />
            <p>{temp}{unitSymbol}</p>
            <p>{weather[0].description}</p>
        </div>
    );
}

export default CurrentWeather;