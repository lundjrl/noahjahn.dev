window.onload = async () => {
    if (localStorage.getItem('dark-mode') == 'true') {
        toggleDarkMode(document.querySelector('.switch'));
    } else if (localStorage.getItem('dark-mode') === null) {
        localStorage.setItem('dark-mode', false);
    }

    var apiNoahJahnDev = apiSetup();
    await apiLogin(apiNoahJahnDev);
    if (localStorage.getItem('visitorId')) {
        try {
            await apiUpdateVisitor(apiNoahJahnDev);
        } catch (err) {
            
        }
    } else {
        apiSendVisitor(apiNoahJahnDev);
    }
};

function apiSetup() {
    return new ApiNoahjahnDev('https://api.noahjahn.dev', 'GZEQQZ9-51F4FG4-QTP4WC0-5Z8XFEZ');
}

async function apiLogin(api) {
    try {
        let result = await api.login();
        api.jwt = result.data.jwt;
    } catch (err) {
        console.error(err);
    }
}

async function apiSendVisitor(api) {
    try {
        let visitor = {
            "darkMode": localStorage.getItem('dark-mode'),
        };

        visitor = await api.createVisitor(visitor);
        localStorage.setItem('visitorId', visitor.data._id);
    } catch (err) {
        console.error(err);
    }
}

async function apiUpdateVisitor(api) {
    try {
        let visitor = {
            "_id": localStorage.getItem('visitorId'),
            "darkMode": localStorage.getItem('dark-mode'),
        };

        return await api.updateVisitor(visitor);
    } catch (err) {
        console.error(err);
        if (err == 404) {
            apiSendVisitor(api);
        }
    }
}

document.querySelector('.switch').addEventListener('click', function(e) {
    toggleDarkMode(e.currentTarget);
    if (localStorage.getItem('dark-mode') == 'true') {
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

function toggleDarkModeSwitch(element) {
    if (element.classList.contains("on")) {
        element.value = false;
    } else {
        element.value = true;
    }
    element.classList.toggle('on');

    return element.value;
}