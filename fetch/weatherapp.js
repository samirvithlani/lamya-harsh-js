const getWeatherData = async (city) => {

  //q param => city
  const appId = "";
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`,{
    method:"GET"
  });
  const data = await res.json();
  console.log(data);
  console.log(data.main.temp)
};

getWeatherData("Mumbai")
