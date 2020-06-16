import Service from '../core/coreService';

class ProductService {

    createProduct(url, body, config) {
        return Service.post(url, body, config);;
    }

    getAllProducts(url, config) {
        return Service.get(url, config);
    }

}

export {
    ProductService
}