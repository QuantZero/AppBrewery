const express = require("express");
const bodyParser = require("body-parser"); //BodyParser default template requirement

const app = express();
app.use(bodyParser.urlencoded({extended: true})); //

app.get("/bmiCalculator", function(req, res) {
    console.log(req)
    res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/bmiCalculator", function(req, res) {


    var num2 = parseFloat(req.body.num2);

    var num1 = parseFloat(req.body.num1);
    
    var bmi = num1/(num2 * num2);

    res.send("The result of the bmi calculation is " + bmi);

});

app.listen(3000, function() {
    console.log("Server started on port 3000.")
});
