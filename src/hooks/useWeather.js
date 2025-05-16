import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '81ac6854a1b748926ad19292fd753dab';

function useWeather(unit) {
    const [latestWeatherData, setLatestWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async (city) => {
        if (!city) {
            setError('Пожалуйста, введите название города');
            return;
        }

        try {
            setError(null);
            setLatestWeatherData(null);

            const currentResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
            );

            const forecastResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${currentResponse.data.coord.lat}&lon=${currentResponse.data.coord.lon}&appid=${API_KEY}&units=${unit}`
            );

            setLatestWeatherData({
                current: currentResponse.data,
                forecast: forecastResponse.data,
            });
        } catch (err) {
            if (err.response?.status === 404) {
                setError('Город не найден. Попробуйте другое место.');
            } else {
                setError('Не удалось получить данные о погоде. Попробуйте позже.');
            }
        }
    };

    useEffect(() => {
        fetchWeather('Moscow');
    }, [unit]);

    return { latestWeatherData, error, fetchWeather };
}

export default useWeather;