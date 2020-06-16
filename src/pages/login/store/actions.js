import { types } from './constants';
import { AuthService, authUrls } from '../../../api/auth/';

const auth = new AuthService();

const login = (body) => {
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    }
    return auth.getToken(authUrls.getTokenUrl, body, config);
}

export {
    login
}