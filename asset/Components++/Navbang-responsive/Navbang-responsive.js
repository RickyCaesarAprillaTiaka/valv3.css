function autoNav() {
    var r = screen.width;
    if (r > 768) {
        document.getElementById('navbang-respon').style.right = -1000;
        document.getElementById('bg').style.left = -1000;
        document.getElementById('openNav').style.opacity = '1';
        document.body.style.overflow = "auto";
        document.getElementById("openNav").setAttribute("onclick", "javascript: openNav();");
    }
}

function openNav() {
    document.getElementById('navbang-respon').style.right = 0;
    document.getElementById('bg').style.left = 0;
    document.getElementById('openNav').style.opacity = '0.5';
    document.body.style.overflow = "hidden";
    document.getElementById("openNav").setAttribute("onclick", "javascript: closeNav();");
}

function closeNav() {
    document.getElementById('navbang-respon').style.right = -1000;
    document.getElementById('bg').style.left = -1000;
    document.getElementById('openNav').style.opacity = '1';
    document.body.style.overflow = "auto";
    document.getElementById("openNav").setAttribute("onclick", "javascript: openNav();");
}