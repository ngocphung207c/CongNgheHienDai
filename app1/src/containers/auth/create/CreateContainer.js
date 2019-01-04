import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as AuthAction from '../redux/actions/AuthAction';
import {Form, Input} from 'formsy-react-components';
import {Button} from 'reactstrap';

class CreateContainer extends Component {

    submit = (data) => {
        this.props.auth.createSessionRequest({userName: data.name, password: data.password});
    };


    render() {
        return (
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4 d-none d-sm-block">Welcome</h1>
                <p className="lead">
                    Please login before we start.<br/>
                    *Note: Your session will be clear when close browser.
                </p>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <Form
                            onValidSubmit={this.submit}
                        >
                            <Input
                                name="name"
                                label="Username"
                                required
                            />
                            <Input
                                name="password"
                                label="Password"
                                type="password"
                                required
                            />
                            <div className="form-group">
                                <Button
                                    color="primary"
                                    block
                                    onClick={this.onSubmit}
                                >
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        auth: bindActionCreators(AuthAction, dispatch)
    }
}

export default connect(
    null,
    mapDispatchToProps
)(CreateContainer);
