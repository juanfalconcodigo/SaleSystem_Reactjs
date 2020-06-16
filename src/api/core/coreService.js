/* import axios from 'axios'; */
import axios from 'axios-observable';
import { saleSystemBaseUrl } from '../../environment';

const Service = axios.create({
    baseURL: saleSystemBaseUrl
});
//interceptor
Service.interceptors.request.use(function(response) {

    console.log(response)
    return response;
}, function(error) {

    return Promise.reject(error);
});
export default Service;