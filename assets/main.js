var coffeeItems = $('.coffee-col').children('div');
var warmDrinkItems = $('.warm-drink-col').children('div');
var smoothieItems = $('.smoothies-col').children('div');
var coldDrinksItems = $('.cold-drinks-col').children('*');
var acaiItems = $('.acai-col').children('div');
var sweetsItems = $('.sweets-col').children('div');
var sandwichesItems = $('.sandwiches-col').children('div');
var toastisItems = $('.toasties-col').children('div');

coffeeItems.hide();
warmDrinkItems.hide();
smoothieItems.hide();
coldDrinksItems.hide();
acaiItems.hide();
sweetsItems.hide();
sandwichesItems.hide();
toastisItems.hide();


$('.coffee').click(function (e){
    e.preventDefault();
    coffeeItems.slideToggle('slow');
});

$('.warm-drinks').click(function (e){
    e.preventDefault();
    warmDrinkItems.slideToggle('slow');
});

$('.cold-drinks').click(function (e){
    e.preventDefault();
    coldDrinksItems.slideToggle('slow');
});

$('.smoothies').click(function (e){
    e.preventDefault();
    smoothieItems.slideToggle('slow');
});

$('.bowls').click(function (e){
    e.preventDefault();
    acaiItems.slideToggle('slow');
});

$('.sweets').click(function (e){
    e.preventDefault();
    sweetsItems.slideToggle('slow');
});

$('.sandwich').click(function (e){
    e.preventDefault();
    sandwichesItems.slideToggle('slow');
});


$('.toastie').click(function (e){
    e.preventDefault();

    toastisItems.slideToggle('slow');
});


/* Get the height of header and footer on different screen size to push
the footer to the bottom of the page regardless of the size of content.*/
setInterval(function(){
    var header = document.querySelector("header").offsetHeight;
    var footer = document.querySelector("footer").offsetHeight;
    document.getElementById("menu-item").style.minHeight = "calc( 100vh - " + header + "px" + " - " + footer + "px" + " - 3rem )";

        // This fixes the position of the back-to-top button on top of the footer
    document.getElementById("myBtn").style.bottom = footer + "px ";

}, 500);


// add more margin to the divs on iPad-size screens
if ($(window).height() > 1000){
    var div = Array.prototype.slice.call(
        document.querySelector("#menu-item").querySelectorAll(".row"));

    div.forEach(function(child){
        child.classList.add("mb-4");
    })
}
