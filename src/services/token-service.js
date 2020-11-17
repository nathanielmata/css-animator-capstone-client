import jwtDecode from "jwt-decode";
import config from '../config'

const TokenService = {
    saveAuthToken(token) {
        window.localStorage.setItem(config.TOKEN_KEY, token)
    },
    getAuthToken() {
        return window.localStorage.getItem(config.TOKEN_KEY)
    },
    clearAuthToken() {
        window.localStorage.removeItem(config.TOKEN_KEY)
    },
    hasAuthToken() {
        return !!TokenService.getAuthToken()
    },
    makeBasicAuthToken(email, password) {
        return window.btoa(`${email}:${password}`)
    },
    parseJwt(jwt) {
        return jwtDecode(jwt);
    },
    readJwtToken() {
        const token = TokenService.getAuthToken();
        return token ? TokenService.parseJwt(token) : undefined;
    },
    getUserName() {
        return window.localStorage.getItem(config.USER_NAME)
    },
    getUserId() {
        return window.localStorage.getItem(config.USER_ID)
    },
    saveUserName(user_name) {
        window.localStorage.setItem(config.USER_NAME, user_name)
    },
    saveUserId(user_id) {
        window.localStorage.setItem(config.USER_ID, user_id)
    }
}
export default TokenService