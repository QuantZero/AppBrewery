//Enter your weigth first and then heigth in meters to check out your body mass index

function bmiCalculator(weight, heigth) {

    var bmi = weight/Math.pow(heigth, 2);
    
    return Math.round(bmi)
    }
    
  //enter here. Example 65kg, 1.8 meters heigth
    var bmi = bmiCalculator(65, 1.8); 
    
    console.log(bmi);