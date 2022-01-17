var randomNumber1 = Math.floor(Math.random() * 6) + 1;//Gives number between 1-6

var randomDiceImage = "dice" + randomNumber1 +".png";//dice1.png - dice6.png

var randomImageSrc = "images/" + randomDiceImage;//Dynamic source link generator

var image1 = document.querySelectorAll("img")[0];//Image 1 Selected 

image1.setAttribute("src", randomImageSrc);//Image 1 attribute changed.

//Same process for image 2 starts
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 +".png";//dice1.png - dice6.png

var randomImageSrc2 = "images/" + randomDiceImage2;//Dynamic source link generator

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSrc2)//Image 1 attribute changed.

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 😎";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚀";
}
else {
    document.querySelector("h1").innerHTML = "Draw. Refresh Me! 👻";
}
