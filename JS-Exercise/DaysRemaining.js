//Copy this code snippet to your browser and enter your age in the lifeInWeeks function below. It will calculate your remaining days, months and weeks until you are 90 years old. 

function lifeInWeeks(age) {


    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

console.log("You have " + days + "days, "+ weeks+ " weeks, and " + months + " months left. ");
    
}

lifeInWeeks(26);
