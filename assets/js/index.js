// import { ApiNoahjahnDev } from './api-noahjahn-dev/index';

window.onload = function() {
    if (localStorage.getItem('dark-mode') == true) {
        toggleDarkMode(document.querySelector('.switch'));
    }

    apiNoahJahnDev = new ApiNoahjahnDev('http://api.noahjahn.dev', 'GZEQQZ9-51F4FG4-QTP4WC0-5Z8XFEZ');
    apiNoahJahnDev.login((err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        apiNoahJahnDev.jwt = JSON.parse(result).data.jwt;

        let visitor = {
            "darkMode": localStorage.getItem('dark-mode'),
            "origin": apiNoahJahnDev.origin
        };

        apiNoahJahnDev.createVisitor(visitor, (err, result) => {
            if (err) {
                console.error(err);
            }
        });
    });
};

document.querySelector('.switch').addEventListener('click', function(e) {
    toggleDarkMode(e.currentTarget);
    if (localStorage.getItem('dark-mode') == true) {
        localStorage.setItem('dark-mode', false);
    } else {
        localStorage.setItem('dark-mode', true);
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
        element.value = false;
    } else {
        element.value = true;
    }
    element.classList.toggle('on');

    return element.value;
}