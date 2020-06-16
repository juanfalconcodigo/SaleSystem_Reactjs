import { UserService, userUrls } from '../../../api/user';

const user = new UserService();


const createUser = (body) => {
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    }
    return user.createUser(userUrls.createUser, body, config);
}

export {
    createUser
}