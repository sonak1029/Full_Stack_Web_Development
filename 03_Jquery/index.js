
// $(document).ready(function(){
//     $("h1").css("color", "#DB7093");
// });

// Here we select all the h1 tag
// console.log($("h1").css("font-size"));
// $("h1").addClass("big-title");
// $("button").css("background-color", "#F5F5F5")

// Here we select only id like this
// $("#titel");

// Here we select only class
// $(".btn");


// Here we select the text
$("h1").text("Welcome to Jquery!");

// Here we select the text in button
$("button").text("Don't Click Me");
$("button").css("border", "1px solid black");
$("button").css("padding", "10px 16px");


// Let's learn about how to give tag
// $("button").html("<em>Don't Click Me</em>");


// attr defination
// Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.

// How to get the value of any one
// $("img").attr("src"); // it will print the sorce of the img
// $("a").attr("href");

// Here we set the value
// console.log($("img").attr("src", "/02_Full_JavaScript_Course/01_JS_Basic/Drum Kit Starting Files/images/kick.png"));
// console.log($("a").attr("href", "https://api.jquery.com/attr/"));


// How to apply addEventListener
// $("h1").click(function(){
//     $("h1").css("color", "#DB7093");
// });


// How to select all the button when we use javascript only option is loop
// for(let i=0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "#DB7093";
//     });
// }

// Now here we select all the button when we use jQuery
// $("button").click(function(){
//     $("h1").css("color", "#DB7093")
// })


// $(document).keypress(function(event){
//     $("h1").text(event.key);
// })


// $("h1").on("mouseover", function(event){
//     $("h1").css("color", "#DB7093");
// });


// how to hide the content
// $("h1").on("click", function(event){
//     $("h1").hide();
// });



// Here we use toggle when me click it will and again me click it will me show me
// $("button").on("click", function(event){
//     $("h1").toggle();
// });


// fadeout and fadein
// $("button").on("click", function(){
//     $("h1").fadeOut();
// });


// fadeout and fadein
// $("button").on("click", function(){
//     $("h1").fadeIn();
// });


// here we use fadeToggle
$("button").on("click", function(){
    $("h1").fadeToggle();
});



// Now here we use slideUp
// $("button").on("click", function(){
//     $("h1").slideUp();
// });

// here we use slideDown
// $("button").on("click", function(){
//     $("h1").slideDown();
// });


// here we use slideToggle
// $("button").on("click", function(){
//     $("h1").slideToggle();
// });


// Here we use animate
// $("button").on("click", function(){
//     $("h1").animate({opacity: 0.5});
// });


// now here we do chained
// $("button").on("click", function(){
//     $("h1").slideUp().slideDown().animate({opacity: 0.5});
// });