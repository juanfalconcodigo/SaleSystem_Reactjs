import Service from '../core/coreService';

class ClientService {

    createClient(url, body) {
        return Service.post(url, body);;
    }

    getAllClients(url, config) {
        return Service.get(url, config);
    }

}

export { ClientService };