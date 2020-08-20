class ApiNoahjahnDev {
    constructor(host, apikey, origin) {
        this.host = host || localhost;
        this.apikey = apikey || null;
        this.origin = origin || 'noahjahn.dev';
        this.jwt = null;
    }

    login(callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", `${this.host}/authentication/login`, true);
        xhr.setRequestHeader("X-API-Key", this.apikey);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    callback(null, xhr.response);
                } else {
                    callback(xhr.status);
                }
            }
        };
        xhr.send();
    }

    createVisitor(visitor, callback) {
        if (this.jwt) {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", `${this.host}/v1/visitors`, true);
            xhr.setRequestHeader("Authorization", `Bearer ${this.jwt}`);
            xhr.setRequestHeader("Content-Type", 'application/json');
    
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status == 200) {
                        callback(null, xhr.response);
                    } else {
                        callback(xhr.status);
                    }
                }
            };
            xhr.send(JSON.stringify(visitor));
        } else {
            callback(new Error('jwt is not set, you need to first login'), null);
        }
    }
}
