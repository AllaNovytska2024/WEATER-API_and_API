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
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}`
    );
  })
  .then((response) => response.json())
  .then((weatherData) => {
    console.log("Weather Data:", weatherData);

    // Скрыть загрузчик
    loader.classList.add("loader-hide");
  });
