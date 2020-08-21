window.onload = async () => {
    if (localStorage.getItem('dark-mode') == true) {
        toggleDarkMode(document.querySelector('.switch'));
    }

    var apiNoahJahnDev = apiSetup();
    await apiLogin(apiNoahJahnDev);
    apiSendVisitor(apiNoahJahnDev);
};

function apiSetup() {
    return new ApiNoahjahnDev('http://localhost:8000', 'GZEQQZ9-51F4FG4-QTP4WC0-5Z8XFEZ');
    //https://api.noahjahn.dev', 'GZEQQZ9-51F4FG4-QTP4WC0-5Z8XFEZ
}

async function apiLogin(api) {
    try {
        let result = await api.login();
        api.jwt = JSON.parse(result).data.jwt;
    } catch (err) {
        console.error(err);
    }
    
}

async function apiSendVisitor(api) {
    try {
        let visitor = {
            "darkMode": localStorage.getItem('dark-mode'),
        };

        return await api.createVisitor(visitor);
    } catch (err) {
        console.error(err);
    }
}

document.querySelector('.switch').addEventListener('click', function(e) {
    toggleDarkMode(e.currentTarget);
});

function toggleDarkMode(element) {
    toggleDarkModeSwitch(element)
    toggleBackground();
    toggleText();
    if (localStorage.getItem('dark-mode') == true) {
        localStorage.setItem('dark-mode', false);
    } else {
        localStorage.setItem('dark-mode', true);
    }
    if (apiNoahJahnDev) {
        if (apiNoahJahnDev.jwt) {

        } else {
            sendVisitor(apiNoahJahnDev);
        }
    } else {

    }
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

function toggleDarkModeSwitch(element) {
    if (element.classList.contains("on")) {
        element.value = false;
    } else {
        element.value = true;
    }
    element.classList.toggle('on');

    return element.value;
}