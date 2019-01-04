import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../Main';
import Header from '../Header';
import LoadableFrame from './components/LoadableFrame';
import './MainLayout.css';

export default class MainLayout extends React.Component {  

    render() { 
        return (
            <Route {...this.props.path} render={matchProps => (
                <LoadableFrame>
                    <Header />
                    <Main>
                        <this.props.component {...this.props} history={matchProps.history}/>
                    </Main>
                </LoadableFrame>
            )} />
        )
    }
};