import { createContext, useState } from 'react';
import useWeather from '../hooks/useWeather';

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
    const [unit, setUnit] = useState('metric');
    const [selectedDay, setSelectedDay] = useState(null);
    const { latestWeatherData, error, fetchWeather } = useWeather(unit);

    return (
        <WeatherContext.Provider
            value={{
                unit,
                setUnit,
                latestWeatherData,
                error,
                fetchWeather,
                selectedDay,
                setSelectedDay,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
}