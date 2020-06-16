import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import moment from 'moment';
const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;
    console.log(jwt_decode(token));
    const { exp } = jwt_decode(token);
    return (exp <= moment().unix()) ? false : true;
};
const PrivateRoute = ({...props }) => {
    return isAuthenticated() ? < Route {...props }
    />:<Redirect to='/login
    '/>;
}

export default PrivateRoute;