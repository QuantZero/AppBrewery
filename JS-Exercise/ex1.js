//Problem: Create a system that will automatically capitalize the first letter of the user's name only using slice, Upper Case and Lower Case commands.


//1 Create a var that stores the name that user enters via prompt.
var name = prompt("What is your name");

//2 Capitalize the first letter of the name 

//2.a isolate the first character
var firstChar = name.slice(0,1);

//2.b Turn the first character to Upper Case
var upperCaseFirstChar = firstChar.toUpperCase();

//2.c Isolate rest of the name
var restOfName = name.slice(1,name.length);

restOfName = restOfName.toLowerCase();

//2.d concactenate the first chart with the rest of the character
var capitalizedName = upperCaseFirstChar + restOfName;

//3 Use capitalized version of the name to greet the user
alert("Hello, " + capitalizedName);

//Hello Yigit