import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function ForecastModal() {
    const { selectedDay, setSelectedDay, unit } = useContext(WeatherContext);

    if (!selectedDay) return null;

    const date = new Date(selectedDay.dt * 1000).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });
    const temp = Math.round(selectedDay.main.temp);
    const unitSymbol = unit === 'metric' ? '°C' : '°F';

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close-button" onClick={() => setSelectedDay(null)}>
                    &times;
                </button>
                <h2>{date}</h2>
                <img
                    src={`http://openweathermap.org/img/wn/${selectedDay.weather[0].icon}@2x.png`}
                    alt={selectedDay.weather[0].description}
                />
                <p>Temperature: {temp}{unitSymbol}</p>
                <p>Weather: {selectedDay.weather[0].description}</p>
                <p>Humidity: {selectedDay.main.humidity}%</p>
                <p>Wind: {selectedDay.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
            </div>
        </div>
    );
}

export default ForecastModal;