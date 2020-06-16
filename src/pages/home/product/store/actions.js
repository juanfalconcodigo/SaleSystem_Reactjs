import { ProductService, productUrls } from '../../../../api/product';

const product = new ProductService();


const createProduct = ({ category, name, photo, price, quantity }) => {
    const config = {
        headers: {
            'content-Type': 'multipart/form-data',
            token: localStorage.getItem('token')
        }
    }
    const newBody = new FormData();
    newBody.append('category', category);
    newBody.append('name', name);
    newBody.append('photo', photo);
    newBody.append('price', price);
    newBody.append('quantity', quantity);
    return product.createProduct(productUrls.createProduct, newBody, config);
}

export {
    createProduct
}