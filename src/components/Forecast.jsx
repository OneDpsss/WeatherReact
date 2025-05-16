import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function Forecast() {
    const { latestWeatherData, unit, setSelectedDay } = useContext(WeatherContext);

    if (!latestWeatherData?.forecast) return null;

    const dailyForecasts = latestWeatherData.forecast.list
        .filter((item) => item.dt_txt.includes('12:00:00'))
        .slice(0, 5);

    return (
        <div className="forecast">
            {dailyForecasts.map((day) => {
                const date = new Date(day.dt * 1000).toLocaleDateString('en-US', {
                    weekday: 'short',
                });
                const temp = Math.round(day.main.temp);
                const unitSymbol = unit === 'metric' ? '°C' : '°F';

                return (
                    <div
                        key={day.dt}
                        className="forecast-day"
                        onClick={() => setSelectedDay(day)}
                    >
                        <p>{date}</p>
                        <img
                            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                            alt={day.weather[0].description}
                        />
                        <p>{temp}{unitSymbol}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Forecast;