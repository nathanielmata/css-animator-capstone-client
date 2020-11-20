import config from '../config'
import TokenService from './token-service'

const AnimationApiService = {
    getAnimations() {
        return fetch(`${config.API_ENDPOINT}/animations`, {
             headers: {
             'authorization': `bearer ${TokenService.getAuthToken()}`,
           }, 
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getAnimationById(id) {
        return fetch(`${config.API_ENDPOINT}/animations/${id}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,

            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postAnimation(newAnimation) {
        return fetch(`${config.API_ENDPOINT}/animations`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(newAnimation),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    updateAnimation(id, title, content) {
        return fetch(`${config.API_ENDPOINT}/animationss/${id}`, {
            method: 'PATCH',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                id,
                title,
                content,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    deleteAnimation(animationId) {
        return fetch(`${config.API_ENDPOINT}/animations/${animationId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ?  Promise.reject(res)
                    : res
            )
    },
}

export default AnimationApiService
