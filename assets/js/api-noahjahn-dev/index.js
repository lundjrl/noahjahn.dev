class ApiNoahjahnDev {
    constructor(host, apikey) {
        this.host = host || localhost;
        this.apikey = apikey || null;
        this.jwt = null;
    }

    login(callback) {
        if (callback) {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", `${this.host}/authentication/login`, true);
            xhr.setRequestHeader("X-API-Key", this.apikey);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status == 200) {
                        callback(null, JSON.parse(xhr.response));
                    } else {
                        callback(xhr.status);
                    }
                }
            };
            xhr.send();
        } else {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open("POST", `${this.host}/authentication/login`, true);
                xhr.setRequestHeader("X-API-Key", this.apikey);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        if (xhr.status == 200) {
                            resolve(JSON.parse(xhr.response));
                        } else {
                            reject(xhr.status);
                        }
                    }
                };
                xhr.send();
            });
        }
    }

    createVisitor(visitor, callback) {
        if (callback) {
            if (this.jwt) {
                let xhr = new XMLHttpRequest();
                xhr.open("POST", `${this.host}/v1/visitors`, true);
                xhr.setRequestHeader("Authorization", `Bearer ${this.jwt}`);
                xhr.setRequestHeader("Content-Type", 'application/json');
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        if (xhr.status == 200) {
                            callback(null, JSON.parse(xhr.response));
                        } else {
                            callback(xhr.status);
                        }
                    }
                };
                xhr.send(JSON.stringify(visitor));
            } else {
                callback(new Error('jwt is not set, you need to first login'), null);
            }
        } else {
            return new Promise((resolve, reject) => {
                if (this.jwt) {
                    let xhr = new XMLHttpRequest();
                    xhr.open("POST", `${this.host}/v1/visitors`, true);
                    xhr.setRequestHeader("Authorization", `Bearer ${this.jwt}`);
                    xhr.setRequestHeader("Content-Type", 'application/json');
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            if (xhr.status == 200) {
                                resolve(JSON.parse(xhr.response));
                            } else {
                                reject(xhr.status);
                            }
                        }
                    };
                    xhr.send(JSON.stringify(visitor));
                } else {
                    reject(new Error('jwt is not set, you need to first login'), null);
                }
            });
        }
    }

    updateVisitor(visitor, callback) {
        if (callback) {
            if (this.jwt) {
                let xhr = new XMLHttpRequest();
                xhr.open("PATCH", `${this.host}/v1/visitors`, true);
                xhr.setRequestHeader("Authorization", `Bearer ${this.jwt}`);
                xhr.setRequestHeader("Content-Type", 'application/json');
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        if (xhr.status == 200) {
                            callback(null, JSON.parse(xhr.response));
                        } else {
                            callback(xhr.status);
                        }
                    }
                };
                xhr.send(JSON.stringify(visitor));
            } else {
                callback(new Error('jwt is not set, you need to first login'), null);
            }
        } else {
            return new Promise((resolve, reject) => {
                if (this.jwt) {
                    let xhr = new XMLHttpRequest();
                    xhr.open("PATCH", `${this.host}/v1/visitors`, true);
                    xhr.setRequestHeader("Authorization", `Bearer ${this.jwt}`);
                    xhr.setRequestHeader("Content-Type", 'application/json');
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            if (xhr.status == 200) {
                                resolve(JSON.parse(xhr.response));
                            } else {
                                reject(xhr.status);
                            }
                        }
                    };
                    xhr.send(JSON.stringify(visitor));
                } else {
                    reject(new Error('jwt is not set, you need to first login'), null);
                }
            });
        }
    }
}
