// scroll event listner
// main content fades away
// navbar "google 문서로 이동" pops out from out of the windows

window.addEventListener('scroll', () => {
    const scrolled = Math.floor(window.scrollY);
    const navPop = document.getElementById('js-header-right-popout');
    console.log(scrolled);

    if (scrolled > 819) {
        navPop.innerHTML = "Google 문서로 이동";
        navPop.style.backgroundColor = "#4386FC";
        navPop.style.color = "white";
        navPop.style.fontWeight = "bold"
    } else {
        navPop.innerHTML = "";
        navPop.style.backgroundColor = "";
        navPop.style.color="";
    }
});

// nav bar relative, menu button control

var open = 0;

function menuExpose() {
    const popup = document.getElementById('js-popup');
    const section = document.getElementsByClassName('wrap-js')[0];
    const icon = document.getElementById('js-icon');

    if (open === 0) {
        popup.style.display = "block";
        section.style.display = "none";
        icon.src = "../../static/img/x_icon.png";
        open++;
    } else {
        popup.style.display = "none";
        section.style.display = "block";
        icon.src = "../../static/img/Hamburger_icon.png";
        open--;
    }
};

// resize icon control

window.onresize = function () {
    const popup = document.getElementById('js-popup');
    const section = document.getElementsByClassName('wrap-js')[0];
    const width = window.innerWidth;
    const icon = document.getElementById('js-icon');

    if (open === 1 && width > 1300) {
        icon.src = "../../static/img/Hamburger_icon.png";
        popup.style.display = "none";
        section.style.display = "block";
        open--;
    }
};
