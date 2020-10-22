console.log("It's working!")
function handleGetData(event){
    //Stops the page from refreshing
  event.preventDefault();
// Load in the value of the search textbox:
  const searchText = $("#search").val()
  $.ajax({url: `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=6bfa9a264b2c6c3b661b5cd232e7bd9c`})
    .then(
      (data) => {
        console.log(data);
        $("#city").text(data.q)
        $("#temp").text(convert(data.main.temp) + `°F`);
        $("#feel").text(convert(data.main.feels_like) + `°F`);
        $("#weather").text(data.weather[0].description);
      },
      (error) => {
        console.log("bad request: ", error)
      }
    )
}
$('form').on("submit", handleGetData)

function convert(a) {
    return Math.round(((a-273.15)*9/5+32));
}