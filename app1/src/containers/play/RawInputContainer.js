import React, {Component} from 'react';
import {Form, Input, Textarea} from 'formsy-react-components';
import {Button} from 'reactstrap';
import {bindActionCreators} from "redux";
import * as PlayAction from "../play/redux/actions/PlayAction";
import {connect} from "react-redux";

class RawInputContainer extends Component {
    submit = (data) => {
        this.props.action.createRawInputRequest(
            {
                customerName: data.name,
                phone: data.phone,
                shortAddress: data.address,
                note: data.note
            }
        );
    };

    render() {
        const token = sessionStorage.getItem('token');
        console.log('token = %s', token);
        return (
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <p className="lead">
                    Please input information here.
                </p>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <Form
                            onValidSubmit={this.submit}
                        >
                            <Input
                                name="name"
                                label="Full Name"
                                required
                            />
                            <Input
                                name="phone"
                                label="Phone"
                                required
                            />
                            <Input
                                name="address"
                                label="Address"
                                required
                            />
                            <Textarea
                                name="note"
                                label="Notes"
                            />
                            <div className="form-group">
                                <Button
                                    color="primary"
                                    block
                                    onClick={this.onSubmit}
                                >
                                    Start
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
        action: bindActionCreators(PlayAction, dispatch)
    }
}

export default connect(
    null,
    mapDispatchToProps
)(RawInputContainer);
