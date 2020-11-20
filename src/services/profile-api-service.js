import TokenService from './token-service';
import config from '../config';

const profileService = {
	getProfile() {
		return fetch(`${config.API_ENDPOINT}/profile/${TokenService.getUserId()}`, {
			headers: { authorization: `bearer ${TokenService.getAuthToken()}` },
		}).then(
			(res) =>
				!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
};
export default profileService;
