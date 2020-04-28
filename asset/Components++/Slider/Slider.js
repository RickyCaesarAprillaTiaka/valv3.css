var r = 1;
showSlides(slideIndex = r);

function plusSlides(r) {
    showSlides(slideIndex += r);
}

function showSlides(r) {
    var i;
    var slides = document.getElementsByClassName("slider");
    if (r > slides.length) {
        slideIndex = 1
    }
    if (r < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    var text = "<a class='pre' onclick='plusSlides(-1)'>< previous</a><a class='nex' onclick='plusSlides(1)'>next ></a>";
 
    
    slides[slideIndex - 1].style.display = "block";
    document.getElementById("btnSlide").innerHTML = text;
}