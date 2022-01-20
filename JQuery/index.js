$("h1").addClass("HeadingStyle")

$("button").text("<em>hey</em>")

$(".lepar").text("Move Move")

$("a").attr("href", "https://www.google.com")

$("h1").click(function () {
    $("h1").css("color", "white")
});


$("button").click(function () {
    $("h1").css("color", "blue");
})

$(document).keypress(function(event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "yellow")
})

$("h1").before("<button>New</button>");

$("button").on("click", function() {
$("h1").slideUp().slideDown().animate({margin:  "20%"});
})