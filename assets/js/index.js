function initialLoad() {
    displayQuote();

    var media = window.matchMedia("(max-width: 576px)");
    checkMedia(media);
    media.addListener(checkMedia);
}

function displayQuote() {
    var quotes = [  "\"Fear is the path to the dark side.\" &#8210 Yoda",
                    "\"With great power, comes great responsibility.\" &#8210 Uncle Ben",
                    "\"The Force will be with you. Always.\" &#8210 Obi-Wan Kenobi"
                ];

    var navQuote = document.getElementById("quote");
    navQuote.innerHTML = ("<i>" + quotes[Math.floor(Math.random() * (quotes.length))] + "</i>");
}

function addActiveToNav(makeActive) {
    var navs = document.getElementsByClassName("nav-link active");

    for (i = 0; i < navs.length; i++) {
        navs[i].classList.remove("active");
    }

    makeActive.classList.add("active");
}

function checkPageLocation() {
    var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    if (window.pageYOffset >= height * 3) {
        addActiveToNav(document.getElementById("nav-contact"));
    // } else if (window.pageYOffset >= height * 2) {
    //     addActiveToNav(document.getElementById("nav-resume"));
    // } else if (window.pageYOffset >= height) {
    //     addActiveToNav(document.getElementById("nav-projects"));
    } else if (window.pageYOffset < height) {
        addActiveToNav(document.getElementById("nav-about"));
    }
}

function checkMedia(media) {
    if (media.matches) {
        document.getElementById("mobile-img").classList.remove("d-none");
        document.getElementById("mobile-rm-bottom").classList.remove("bottom");
    } else {
        addClass(document.getElementById("mobile-img"), "d-none");
        addClass(document.getElementById("mobile-rm-bottom"), "bottom");
    }
}

function addClass(element, name) {
    var classes = element.className.split(" ");
    if (classes.indexOf(name) == -1) {
        element.className += " " + name;
    }
}

window.onload = initialLoad;
window.onscroll = checkPageLocation;
