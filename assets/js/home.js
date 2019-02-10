function initialLoad() {
    displayQuote();
}

function displayQuote() {
    var quotes = [  "\"Fear is the path to the dark side.\" &#8210 Yoda",
                    "\"With great power, comes great responsibility.\" &#8210 Uncle Ben",
                    "\"The Force will be with you. Always.\" &#8210 Obi-Wan Kenobi",
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

window.onload = initialLoad;
