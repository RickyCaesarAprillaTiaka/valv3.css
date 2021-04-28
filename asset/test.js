function fixedNav() {
    if (document.documentElement.scrollTop > 40) {
        document.getElementById('second-navbang').style.top = '0px';
        document.getElementById('main-navbang').style.opacity = 0;
    } else {
        document.getElementById('second-navbang').style.top = '-100px';
        document.getElementById('main-navbang').style.opacity = 1;
    }
}

function autoNav() {
    var r = screen.width;
    if (r > 768) {
        document.getElementById('navbang-respon').style.right = "-1000px";
        document.getElementById('bg').style.left = "-1000px";
        document.getElementById('openNav').style.opacity = 1;
        document.body.style.overflow = "auto";
        document.getElementById("openNav").setAttribute("onclick", "javascript: openNav();");
    }
}

function openNav() {
    document.getElementById('navbang-respon').style.right = "0px";
    document.getElementById('bg').style.left = "0px";
    document.getElementById('openNav').style.opacity = 0.5;
    document.body.style.overflow = "hidden";
    document.getElementById("openNav").setAttribute("onclick", "javascript: closeNav();");
}

function closeNav() {
    document.getElementById('navbang-respon').style.right = "-1000px";
    document.getElementById('bg').style.left = "-1000px";
    document.getElementById('openNav').style.opacity = 1;
    document.body.style.overflow = "auto";
    document.getElementById("openNav").setAttribute("onclick", "javascript: openNav();");
}

document.body.onscroll = function() {
    autoNav();
    fixedNav();
}

document.body.onload = showSlides(slideIndex = 1);

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

    var text = "<a class='pre' onclick='plusSlides(-1)'>Prev</a><a class='nex' onclick='plusSlides(1)'>Next</a>";
 
    
    slides[slideIndex - 1].style.display = "block";
    document.getElementById("btnSlide").innerHTML = text;
}