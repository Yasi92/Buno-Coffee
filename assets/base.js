document.addEventListener("DOMContentLoaded", function() {

    var hofdorpDiv = document.getElementById("hoofdorp-div");
    var amstelDiv = document.getElementById("amstel-div");

    var hofdorpDivBg = document.getElementById("background-image");
    var amstelDivBg = document.getElementById("background-image-amstel");

    hofdorpDiv.addEventListener("mouseover", ()=>{
        hofdorpDivBg.style.filter = "blur(2px)";
    })

    amstelDiv.addEventListener("mouseover", ()=>{
        amstelDivBg.style.filter = "blur(2px)";
    })

    hofdorpDiv.addEventListener("click", ()=>{
        hofdorpDivBg.style.filter = "blur(2px)";
        window.open('/buno-coffee-hoofddorpplein.html', '_blank').focus(); // new tab
    })

    amstelDiv.addEventListener("click", ()=>{
        amstelDivBg.style.filter = "blur(2px)";
        window.open('/buno-coffee-amstel.html', '_blank').focus(); // new tab
    })


    hofdorpDiv.addEventListener("mouseout", ()=>{
        hofdorpDivBg.style.filter = "none";
    })

    amstelDiv.addEventListener("mouseout", ()=>{
        amstelDivBg.style.filter = "none";
    })

  });


  setInterval(function(){
    var header = document.querySelector("header").offsetHeight;
    var footer = document.querySelector("footer").offsetHeight;
    document.getElementById("menu-item").style.minHeight = "calc( 100vh - " + header + "px" + " - " + footer + "px" + " - 3rem )";

    var button = document.getElementById("myBtn");
    // This fixes the position of the back-to-top button on top of the footer
    
    if(button){
        button.style.bottom = footer + "px ";
    }

}, 500);
