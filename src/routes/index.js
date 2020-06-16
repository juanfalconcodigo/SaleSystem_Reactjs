import React from 'react'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import { LoginContainer,RegisterContainer } from '../pages';
import { HomeRouting } from '../pages/home';
import PrivateRoute from './privateRoute';

const RoutingRoot=()=>(
    <Router>
        <Switch>
            <PrivateRoute  path="/home"  component={HomeRouting}/>
            <Route  path="/login"  component={LoginContainer}/>
            <Route  path="/register" component={RegisterContainer}/>
            <Redirect from="**" to="/login"/>
        </Switch>
    </Router>
)

export default RoutingRoot;