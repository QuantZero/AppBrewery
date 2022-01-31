//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {

    //Day defined
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    //Commands for Weekends and Weekdays 0-6 0=Sunday 
    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;

        default:
            console.log("Error: current day is equal to: " + currentDay);
            break;
    }

    res.render("list", {
    kindofDay: day
    }); //respond by rendering  list esj

});

app.listen(3000, function () {
    console.log("Local server initiated at port 3000.")
});