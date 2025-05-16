import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function ErrorMessage() {
    const { error } = useContext(WeatherContext);

    if (!error) return null;

    return <div className="error-message">{error}</div>;
}

export default ErrorMessage;