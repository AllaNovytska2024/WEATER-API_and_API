const conteinerSity = document.querySelector("#container-sitys");
const loader = document.querySelector("#loader");

const getSity = (value) => {
  loader.classList.toggle("loader-hide");

  setTimeout(() => {
    fetch(`https://get.geojs.io/v1/ip/geo.json`)
      .then((rs = res.json()))
      .then((data) => {
        const sitys = data.sitys;
        sitys.map((sity) => {
          const card = document.createElement("div");
          card.classList.add("sity-card");
          const country = document.createElement("h3");
          country.textContent = sity.country;
          const heading = document.createElement("h4");
          heading.textContent = sity.timezone;
          const longitude = document.createElement("p");
          longitude.textContent = `longitude: ${sity.longitude}`;
          const latitude = document.createElement("p");
          latitude.textContent = `latitude: ${sity.latitude}`;
          const weathercode = document.createElement("p");
          weathercode.textContent = `weathercode: ${sity.weathercode}`;
          const img = document.createElement("img");
          img.src = sity.images[0];
          img.classList.add("card-img");
          console.log("create!");
        });
      });
  });
};
