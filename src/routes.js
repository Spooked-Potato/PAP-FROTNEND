import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


//import Logon from './pages/Logon';
import users from './pages/Registo';
//import Profile from './pages/Profile';
//import NewIncident from './pages/NewIncident';

export default function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/users" component={users} />
            </Switch>
        </BrowserRouter>
    )
}