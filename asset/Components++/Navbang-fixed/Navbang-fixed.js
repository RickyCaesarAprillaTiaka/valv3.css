function fixedNav() {
    if (document.body.scrollTop > 40) {
        document.getElementById('second-navbang').style.top = 0;
        document.getElementById('main-navbang').style.opacity = 0;
    } else {
        document.getElementById('second-navbang').style.top = -100;
        document.getElementById('main-navbang').style.opacity = 1;
    }
}