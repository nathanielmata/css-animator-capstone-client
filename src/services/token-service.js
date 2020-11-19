import jwtDecode from 'jwt-decode';
import config from '../config';

let _timeoutId;
const _TEN_SECONDS_IN_MS = 10000;

const TokenService = {
	saveAuthToken(token) {
		window.sessionStorage.setItem(config.TOKEN_KEY, token);
	},
	getAuthToken() {
		return window.sessionStorage.getItem(config.TOKEN_KEY);
	},
	clearAuthToken() {
		console.info('clearing the auth token');
		window.sessionStorage.removeItem(config.TOKEN_KEY);
	},
	hasAuthToken() {
		return !!TokenService.getAuthToken();
	},
	makeBasicAuthToken(email, password) {
		return window.btoa(`${email}:${password}`);
	},
	parseJwt(jwt) {
		return jwtDecode(jwt);
	},
	readJwtToken() {
		const token = TokenService.getAuthToken();
		return token ? TokenService.parseJwt(token) : undefined;
	},
	_getMsUntilExpiry(payload) {
	
		return payload.exp * 1000 - Date.now();
	},
	queueCallbackBeforeExpiry(callback) {
		/* get the number of ms from now until the token expires */
		const msUntilExpiry = TokenService._getMsUntilExpiry(
			TokenService.readJwtToken()
		);
		
		_timeoutId = setTimeout(callback, msUntilExpiry - _TEN_SECONDS_IN_MS);
	},
	clearCallbackBeforeExpiry() {
		clearTimeout(_timeoutId);
	},
	getUserName() {
		return window.localStorage.getItem(config.USER_NAME);
	},
	getUserId() {
		return window.localStorage.getItem(config.USER_ID);
	},
	saveUserName(user_name) {
		window.localStorage.setItem(config.USER_NAME, user_name);
	},
	saveUserId(user_id) {
		window.localStorage.setItem(config.USER_ID, user_id);
	},
};

export default TokenService;
