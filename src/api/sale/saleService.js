import Service from '../core/coreService'

class SaleService {
    createSale(url, body, config) {
        return Service.post(url, body, config);;
    }

    getAllSales(url, config) {
        return Service.get(url, config);
    }


}

export {
    SaleService
};