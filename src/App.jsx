import { useContext } from 'react';
import { WeatherContext } from './context/WeatherContext';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import ForecastModal from './components/ForecastModal';
import ErrorMessage from './components/ErrorMessage';
import './assets/styles.css';

function App() {
    const { error } = useContext(WeatherContext);

    return (
        <div className="container">
            <Header />
            <SearchBar />
            <CurrentWeather />
            <Forecast />
            <ForecastModal />
            {error && <ErrorMessage />}
        </div>
    );
}

export default App;