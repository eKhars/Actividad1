document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById("main-image");
    const hiddenImage = document.querySelector(".hidden-image");
    const topLogo = document.querySelector(".top-left-logo");
    const centerText = document.querySelector(".center-text");
    const centerLogo = document.querySelector(".center-logo"); 
    
    let showMainImage = true;

    function toggleImages() {
        if (showMainImage) {
            mainImage.style.display = "none";
            hiddenImage.style.display = "block";
            topLogo.style.display = "none";
            centerText.style.display = "none";
            

            centerLogo.style.display = "block";
        } else {
            mainImage.style.display = "block";
            hiddenImage.style.display = "none";
            topLogo.style.display = "block";
            centerText.style.display = "block";
            
            
            centerLogo.style.display = "none";
        }
        showMainImage = !showMainImage;
    }

    setInterval(toggleImages, 3000); 
});


/*Menu desplegable*/ 

$(function () {

    $("div#hamburger-content").click (function () {
        $("div#menu").addClass ('open')
    })

    $("div#close").click (function () {
        $("div#menu").removeClass ('open')
    })

})