class ApiNoahjahnDev {
    constructor(host, apikey) {
        this.host = host || localhost;
        this.apikey = apikey || null;
        this.jwt = null;
        this.errors = {
            jwtNotSetError: new Error('jwt is not set, you need to first login'),
        };
    }

    jhr(requestMethodType, url, requestHeaders, requestBody = null, callback = null) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open(requestMethodType, url, true);
            requestHeaders['Content-Type'] = 'application/json';
            for (const [key, value] of Object.entries(requestHeaders)) {
                xhr.setRequestHeader(key, value);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status == 200) {
                        if (callback) {
                            callback(null, JSON.parse(xhr.response));
                        } else {
                            resolve(JSON.parse(xhr.response));
                        }
                    } else {
                        if (callback) {
                            callback(xhr.status);
                        } else {
                            reject(xhr.status);
                        }
                    }
                }
            }
            if (requestBody) {
                xhr.send(JSON.stringify(requestBody));
            } else {
                xhr.send();
            }
        });
    }

    async login(callback = null) {
        return (await this.jhr('POST', `${this.host}/authentication/login`, { 'X-API-Key': this.apikey }));
    }

    async createVisitor(visitor, callback) {
        if (this.jwt) {
            return (await this.jhr('POST', `${this.host}/v1/visitors`, { 'Authorization': `Bearer ${this.jwt}` }, visitor));
        } else {
            if (callback) {
                callback(this.errors.jwtNotSetError, null);
            } else {
                return new Promise((resolve, reject) => {
                    reject(this.errors.jwtNotSetError);
                });
            }
        }
    }

    async updateVisitor(visitor, callback) {
        if (this.jwt) {
            return (await this.jhr('PATCH', `${this.host}/v1/visitors`, { 'Authorization': `Bearer ${this.jwt}` }, visitor));
        } else {
            if (callback) {
                callback(jwtNotSetError, null);
            } else {
                return new Promise((resolve, reject) => {
                    reject(jwtNotSetError);
                });
            }
        }
    }
}
