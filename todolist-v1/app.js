//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true})); //added bodyParser
app.use(express.static("public"));

mongoose.connect("mongoose://localhost:27017/todolistDB")

const itemsSchema = {
    name: String

};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item ({
    name: "Welcome to your todolist!"
});

const item2 = new Item ({
    name: "Hit the plus button to add a new item."
});

const item3 = new Item ({
    name: "<-- Hit this to delete an item."
});

const defaultItems = [item1, item2, item3];

Item.insertMany(defaultItems, function(err){
    if (err) {
        console.log(err);
    }
    else {
        console.log("Successfully saved default items");
    }
});

app.get("/", function (req, res) {

let day = date();

    res.render("list", {
        listTitle: "Today",
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