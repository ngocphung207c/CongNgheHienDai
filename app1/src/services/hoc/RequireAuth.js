import React, { Component } from 'react';
import { connect } from 'react-redux';
import History from '../../routes/History';

export default function (ComposedComponent) {
    
    class Authentication extends Component {

        componentWillMount() {
            if (!this.props.session) {
                History.push('/');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { 
            session: state.auth.session
        };
    }

    return connect(
        mapStateToProps
    )(Authentication);
}
