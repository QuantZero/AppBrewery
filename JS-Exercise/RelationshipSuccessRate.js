//Copy and paste the code below to your console and you can see the success rate of your relationship. Math does not lie

prompt("Name of the partner A")
prompt("Name of the partner B")

var n = Math.random()*100;
n=Math.floor(n);

if(n > 70) {
    alert("You have "+ n + "% success rate." + " You love each other like Kanye loves Kanye.");
}

if (n > 30 && n <= 70) {
    alert("Your relationship will have "+ n +"%"+" success chance.");

}

if (n <= 30) {
    alert("Your love has " + n + " success chance. Play again.");
}
