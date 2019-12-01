import 'weather-icons/css/weather-icons.min.css';
import './style.css';

async function getUserLocation() {
  const LOCATION_API_TOKEN = 'eb5b90bb77d46a';

  return fetch(`https://ipinfo.io/json?token=${LOCATION_API_TOKEN}`).then(response => {
    return response.json();
  });
}

async function getWeatherForecast(locationCoordinates) {
  return fetch(`http://localhost:8000/weather-forecast/${locationCoordinates}`).then(response => response.json());
}

function renderForecastInfo(currently, city) {
  const { summary, icon } = currently;

  const infoContainer = document.createDocumentFragment();

  /* Icon */
  const weatherIconClassName = {
    'partly-cloudy-night': 'icon wi wi-night-partly-cloudy',
  };

  const iconEl = document.createElement('i');
  iconEl.className = weatherIconClassName[icon];
  infoContainer.appendChild(iconEl);

  /* Summary */
  const summaryEl = document.createElement('p');
  summaryEl.innerText = summary;
  infoContainer.appendChild(summaryEl);

  /* City */
  const cityEl = document.createElement('p');
  cityEl.innerText = city;
  infoContainer.appendChild(cityEl);

  document.getElementById('forecast').appendChild(infoContainer);
}

async function init() {
  try {
    const { loc, city } = await getUserLocation();
    const { currently } = await getWeatherForecast(loc);

    renderForecastInfo(currently, city);
  } catch (e) {
    console.log(e);
  }
}

init();
