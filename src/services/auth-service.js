function saveJWT(token) {
    localStorage.setItem("token", token);
}

function getJWT() {
    let token = localStorage.getItem("token");

    if (token === "undefined" || token === "null") {
        token = null;
    }
    return token;
}

function saveJWTUser(token){
    localStorage.setItem("tokenUser", token);
}

function getJWTUser() {
    let token = localStorage.getItem("tokenUser");

    if (token === "undefined" || token === "null") {
        token = null;
    }
    return token;
}

module.exports = {
    saveJWT,
    getJWT,
    saveJWTUser,
    getJWTUser
};