//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();

let items = ["Buy Food", "Get Beer", "Hit the Gym"];
let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
})); //added bodyParser
app.use(express.static("public"));

app.get("/", function (req, res) {

let day = date();

    res.render("list", {
        listTitle: day,
        newListItems: items
    }); //respond by rendering  list esj

});

//Post request
app.post("/", function (req, res) {

    let item = req.body.newListItems;

    if (req.body.list === "Work") {
        workItems.push(item);
    } else {
        items.push(item);

        res.redirect("/");

    }



});

app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    })
});


app.get("/about", function(req, res) {
    res.render("about")
})

app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work")
});




app.listen(3000, function () {
    console.log("Local server initiated at port 3000.")
});