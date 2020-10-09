import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views

import Logout from './views/Logout';
import ManageUser from './views/ManageUser';
import ManageBooks from './views/ManageBooks';

import Support from './views/Support';
import SignIn from './views/SignIn';
import Preview from './layout/Preview';

import Dashboard from './views/Dashboard';
import Account from './views/Account';
import RegisterBooks from './views/RegisterBooks';
import RegisterUser from './views/RegisterUser';
import RegisterBookIssue from './views/RegisterBookIssue';
import RegisterBookReturn from './views/RegisterBookReturn';

import EditUser from './views/EditUser';
import EditBooks from './views/EditBooks';


export default class Routes extends Component {
        render() {
                return (
                    <Switch>
                            <Redirect
                                exact
                                from="/"
                                to="/SignIn"
                            />
                         
                           
                            <Route
                                component={SignIn}
                                exact
                                path="/SignIn"
                            />

			
                             
                            <Route
                            component={Preview}
                            exact
                            path="/Preview"
                            
                            />
                            <Route
                            component = {RegisterUser}
                            exact
                            path="/registeruser"/>
                            <Route
                            component = {Dashboard}
                            exact
                            path="/dashboard"
                            
                            />
                            <Route
                            component = {RegisterBooks}
                            exact
                            path = "/registerbooks"/>

			    <Route
                         component = {EditBooks}
                         exact
                         path = "/editbooks"/> 

			<Route
                         component = {EditUser}
                         exact
                         path = "/edituser"/>                          
                           

                            <Route
                            component = {RegisterBookIssue}
                            exact
                            path="/bookissue"/>
                           

                            <Route
                            component = {RegisterBookReturn}
                            exact
                            path = "/bookreturn"/>
                            <Route
                            component = {ManageUsers}
                            exact
                            path = "/users"/>
                              <Route 
                           component = {ManageBooks}
                           exact
                           path = "/books"/>
                               
                            
                            <Route
                            component={Account}
                            exact
                            path="/account"
                            />

                             

                             <Route
                            component = {Logout}
                            exact
                            path = "/logout"
                            />
                            
                            

                            <Route
                            component = {Support}
                            exact
                            path = "/support"
                            />
                            
                            
                            
                           
                                               </Switch>
                );
        }
}
