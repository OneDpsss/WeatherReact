import { useContext, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
    const { fetchWeather } = useContext(WeatherContext);
    const [city, setCity] = useState('');

    const handleSearch = () => {
        fetchWeather(city);
        setCity('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter city name"
            />
            <button onClick={handleSearch}>
                <FaSearch />
            </button>
        </div>
    );
}

export default SearchBar;