// script.js
let image = document.querySelector(".image");
document.getElementById("check").addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("search").value;
  const apiKey = "f99723de71691c10ffae5654f781acee";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("temp").innerText = "❌ City not found!";
      return;
    }

    // Extract data
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const icon = data.weather[0].icon;
    image.innerHTML =  `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}"></img>`;
    // Update temperature paragraph
    document.getElementById("temp").innerHTML = `
      🌆 ${data.name} <br>
      🌡️ Temperature: ${temp}°C <br>
      ☁️ Condition: ${desc} <br>`;
  } catch (error) {
    document.getElementById("temp").innerText = "⚠️ Error fetching data!";
  }
};
