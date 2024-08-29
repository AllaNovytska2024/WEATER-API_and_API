

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const containerCity = document.getElementById("container-city");

  // Показать загрузчик
  loader.classList.remove("loader-hide");
 
  // Получение данных по широте, долготе и городу
  fetch("https://get.geojs.io/v1/ip/geo.json")
    .then((response) => response.json())
    .then((data) => {
      const { latitude, longitude, area_code } = data;
      console.log(
        `Latitude: ${latitude}, Longitude: ${longitude}, City: ${area_code}`
      );

      // Запрос прогноза погоды с использованием полученных координат
      return fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
      );
    })
    .then((response) => response.json())
    .then((weatherData) => {
      console.log("Weather Data:", weatherData);

      // Скрыть загрузчик
      loader.classList.add("loader-hide");

      // Отобразить данные о погоде
      // containerCity.innerHTML =( `
      //   <h2>Weather in ${weatherData.area_code}</h2>
      //   <p>Temperature: ${weatherData.hourly.temperature_2m[0]}°C</p>
      //   <p>Humidity: ${weatherData.hourly.relative_humidity_2m[0]}%</p>
      //   <p>Wind Speed: ${weatherData.hourly.wind_speed_10m[0]} m/s</p>
      // `);
    });
  //     .catch(error => {
  //       console.error('Ошибка: ', error);
  //       loader.classList.add('loader-hide');
  //       containerCity.innerHTML = '<p>Failed to load weather data.</p>';
  //     });
});
