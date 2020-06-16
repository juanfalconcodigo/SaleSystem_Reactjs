import Service from '../core/coreService'

class UserService {

    createUser(url, body, config) {
        return Service.post(url, body, config);
    }

    deleteUser(id) {

    }

    getUser() {

    }

    putUser() {

    }

    getAllUser(url, body, config) {
        return Service.get(url, body, config);
    }

}

export {
    UserService
}