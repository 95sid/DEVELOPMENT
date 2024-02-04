const data = "46182dbe893ba516dad98e7a4d85cf41";
const screen = document.querySelector(".screen");
const submit = document.querySelector("button");

submit.addEventListener("click",function(e){
    
})

async function getWeather(value) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q = ${cityvalue}&appid=${appkey}&units=metric`
    );
    if (!response.ok) throw new Error("Network Error");
    const data = await response.json();
    console.log(data);
  } catch (error) {}
}

