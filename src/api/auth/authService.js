import Service from '../core/coreService';

class AuthService {

    getToken(url, body, config) {
        return Service.post(url, body, config);
    }

}

export {
    AuthService
};