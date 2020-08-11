import cookie from "cookie_js"

const adminToken = "admin_token";
const usernameKey = "username";

export function getToken() {
    return cookie.get(adminToken);
}

export function setToken(token) {
    cookie.set(adminToken,token);
}

export function removeToken(token) {
    cookie.remove(adminToken)
}

export function setUsername(username){
    cookie.set(usernameKey,username);
}

export function getUsername(){
    return cookie.get(usernameKey);
}

export function removeUsername(){
    return cookie.remove(usernameKey);
}