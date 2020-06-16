import { types } from './constants';
import {
    ClientService,
    clientUrls,
    ProductService,
    productUrls,
    SaleService,
    saleUrls
} from '../../../../api';

const clientService = new ClientService();
const productervice = new ProductService();
const saleService = new SaleService();



/* const getClients = () => {
    const config = {
        headers: {
            'content-Type': 'application/json',
            token
        }
    }
    return clientService.getAllClients(clientUrls.getClients, config).then((data) => {
        console.log(data.data);
        return data.data.clients;
    }).catch((err) => {
        console.log(err.response.data, err.response.status);
        return [];
    });
} */

const getClientSubscription = () => {
    const config = {
        headers: {
            'content-Type': 'application/json',
            token: localStorage.getItem('token')
        }
    }
    return clientService.getAllClients(clientUrls.getClients, config);
}

const getProductSubscription = () => {
    const config = {
        headers: {
            'content-Type': 'application/json',
            token: localStorage.getItem('token')
        }
    }
    return productervice.getAllProducts(productUrls.getProducts, config);
}

const postVentaSubscription = (body) => {
    const config = {
        headers: {
            'content-Type': 'application/json',
            token: localStorage.getItem('token')
        }
    }
    return saleService.createSale(saleUrls.createSale, body, config);
}

export {
    /* getClients, */
    getClientSubscription,
    getProductSubscription,
    postVentaSubscription
}