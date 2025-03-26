function convertToCelsius(temp) {
  const celsius = (temp - 32) * 5 / 9;
  console.log(`${temp}°F son ${celsius.toFixed(1)}°C`);
}

function convertToFahrenheit(temp) {
  const fahrenheit = (temp * 9 / 5) + 32;
  console.log(`${temp}°C son ${fahrenheit.toFixed(1)}°F`);
}
