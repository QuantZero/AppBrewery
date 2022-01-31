//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy Food", "Get Beer", "Hit the Gym"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true})); //added bodyParser
app.use(express.static("public"));

app.get("/", function (req, res) {

    //Day defined
    var today = new Date();

  //Changed the date format
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {
        kindOfDay: day, newListItems: items
    }); //respond by rendering  list esj

});

//Post request
app.post("/", function(req, res) {
    var item = req.body.newListItems;

    items.push(item);

    res.redirect("/");

})



app.listen(3000, function () {
    console.log("Local server initiated at port 3000.")
});