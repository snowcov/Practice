async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'OPENWEATHERMAP_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            document.getElementById('weatherInfo').innerHTML = '<p>City not found</p>';
        } else {
            const weatherInfo = `
                <h2>${data.name}</h2>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherInfo').innerHTML = '<p>Error fetching weather data</p>';
    }
}
