let city = document.querySelector("input");
let fetch_btn = document.querySelector("button");
let p = document.querySelector("p");
let city_holder = document.querySelector("h2");

let api = "33bbb689ba7633bf671459e3eda979e8";

// replace the original click handler with an enhanced one
fetch_btn.removeEventListener("click", fetchWeatherData);

async function fetchWeatherData() {
  if (city.value.trim() === "") return;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city.value
  )}&units=metric&appid=${api}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const temp = Math.round(data.main.temp);
    const desc =
      data.weather && data.weather[0] ? data.weather[0].description : "";
    const humidity = data.main.humidity;
    const wind = data.wind.speed;

    city_holder.textContent = `${data.name}${
      data.sys && data.sys.country ? ", " + data.sys.country : ""
    }`;
    p.innerHTML = `Temperature: ${temp}°C<br>${desc}<br>Humidity: ${humidity}%<br>Wind: ${wind} m/s`;
  } catch (err) {
    city_holder.textContent = "";
    p.textContent = err.message || "Unable to fetch weather";
  }
}

fetch_btn.addEventListener("click", fetchWeatherData);

// allow Enter key to trigger fetch
city.addEventListener("keydown", (e) => {
  if (e.key === "Enter") fetchWeatherData();
});
