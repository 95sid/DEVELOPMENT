const apikey = "46182dbe893ba516dad98e7a4d85cf41";
const screen = document.querySelector(".screen");
const submit = document.querySelector("button");
submit.addEventListener("click", function (e) {});

submit.addEventListener("click", (event) => {
  const cityName = screen.value;
  getWeather(cityName);
});
async function getWeather(cityvalue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${apikey}&u nits=metric`
    );
    if (!response.ok) throw new Error("Network Error: Enter Valid City Name");
    const data = await response.json();
    console.log(data);

    document.querySelector(".feels-like").innerHTML = `Feel Like: ${(
      data.main.feels_like - 273
    ).toFixed(2)} `;

    document.querySelector(
      ".Humidity"
    ).innerHTML = `Humidity:${data.main.humidity}`;

    document.querySelector(
      ".wind-speed"
    ).innerHTML = `Wind Speed: ${data.wind.speed}`;

    document.querySelector(".temp").innerHTML = (data.main.temp - 273).toFixed(
      1
    );

    document.querySelector(".conditions").innerHTML =
      data.weather[0].description;
    document.querySelector(".weather-icon").innerHTML = `<img
    src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"
    alt="Weather Icon"
  />`;
  } catch (error) {
    alert(error);
  }
}
