const express = require("express")
const https = require("https"); //Native Node Module to create a get request from external APIs
const bodyParser = require("body-parser"); //BodyParser module request.


const app = express();

app.use(bodyParser.urlencoded({extended: true})); //Necessary code to start body-parser requests.

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html")

 

})

app.post("/", function(req, res) { //responding to the form post method.

const query = req.body.cityName
const apiKey = "2e9c05fbc0a8f94ffdc63b8cea6745d9"
const unit = "metric"

//Used const to hold weather API and shorten the function line.
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units="+ unit;

https.get(url, function(response) {
    console.log(response.statusCode) //Shows the status code on the console

    //Transforms the data into JSON format and shows it on the console
    response.on("data", function(data) {
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp
        const description = weatherData.weather[0].description //Description data path was inside an array so we use brackets.
        const icon = weatherData.weather[0].icon //Icon path for data change
        const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png" //Spliced and added the icon const to update icon based on new date

        res.write("<p>The weather is " + description + "</p>")
        res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celcius.</h1>") 
        res.write("<img src=" + imageURL + ">")
        res.send();
        //There can onlu be pne res.send so we use res.write to insert other lines
    })
});
})


app.listen(3000, function() {
    console.log("Server is running on port 3000.")
})   

