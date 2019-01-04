import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import requireAuth from '../services/hoc/RequireAuth';
import requireNotAuth from '../services/hoc/RequireNotAuth';
import MainLayout from '../components/Layout/MainLayout';
import CreateContainer from '../containers/auth/create/CreateContainer';
import RawInputContainer from '../containers/play/RawInputContainer';
import MapsInputContainer from "../containers/maps/MapsInputContainer";

class AppRoute extends Component {

    render() {
        return (
            <Switch>
                <MainLayout exact path='/' component={requireNotAuth(CreateContainer)} />
                <MainLayout exact path='/play' component={requireAuth(RawInputContainer)} />
                <MainLayout exact path='/maps' component={requireAuth(MapsInputContainer)} />

            </Switch>
        );
    }
}

export default AppRoute;
