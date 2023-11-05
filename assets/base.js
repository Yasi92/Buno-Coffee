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


