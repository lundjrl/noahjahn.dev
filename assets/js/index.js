window.onload = function() {
    console.log(localStorage.getItem('dark-mode'));
    if (localStorage.getItem('dark-mode') == '1') {
        toggleDarkMode(document.querySelector('.switch'));
    }
};

document.querySelector('.switch').addEventListener('click', function(e) {
    toggleDarkMode(e.currentTarget);
    if (localStorage.getItem('dark-mode') == '1') {
        localStorage.setItem('dark-mode', '0');
    } else {
        localStorage.setItem('dark-mode', '1');
    }

});

function toggleDarkMode(element) {
    toggleDarkModeSwitch(element)
    toggleBackground();
    toggleText();
}

function toggleBackground() {
    document.querySelector('body').classList.toggle('dark');
}

function toggleText() {
    var textElements = document.querySelectorAll('h4.custom');
    textElements.forEach(function(textElement) {
        textElement.classList.toggle('dark');
    });
}

function disableDarkMode(element) {
    console.log("disable dark mode");
}

function toggleDarkModeSwitch(element) {
    if (element.classList.contains("on")) {
        element.value = "0";
    } else {
        element.value = "1";
    }
    element.classList.toggle('on');

    return element.value;
}