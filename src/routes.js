import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


//import Logon from './pages/Logon';
//import Register from './pages/Resgister';
//import Profile from './pages/Profile';
//import NewIncident from './pages/NewIncident';

export default function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/registo" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}