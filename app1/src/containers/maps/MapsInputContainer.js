import React, {Component} from 'react';
import {Form, Input, Textarea} from 'formsy-react-components';
import {Button, ListGroup, ListGroupItem} from 'reactstrap';
import {bindActionCreators} from "redux";
import * as MapsAction from "../maps/redux/actions/MapsAction";
import {connect} from "react-redux";
import Geocode from "react-geocode";
import {API_KEY} from '../../utils/constants'
import {compose, withProps} from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

Geocode.setApiKey(API_KEY);
Geocode.enableDebug();

const defaultZoom = 16;
const defaultCenter = {lat: 10.774004, lng: 106.697477};
const MyMapComponent = compose(
    withProps({
        googleMapURL:
            `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `400px`}}/>,
        mapElement: <div style={{height: `100%`}}/>
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={defaultZoom} center={props.location}>
        <Marker position={props.location}/>
    </GoogleMap>
));

class MapsInputContainer extends Component {
    state = {
        address: '',
        location: defaultCenter,
        hasError: false
    };
    submit = (data) => {
        // this.props.action.createRawInputRequest(
        //     {
        //         customerName: data.name,
        //         phone: data.phone,
        //         shortAddress: data.address,
        //         note: data.note
        //     }
        // );
        Geocode.fromAddress(data.address).then(
            response => {
                const {formatted_address, geometry} = response.results[0];
                this.setState({
                    ...this.state, ...{
                        address: formatted_address,
                        location: geometry.location,
                        hasError: false
                    }
                });
                console.log(response);
            },
            () => {
                this.setState({...this.state, ...{hasError: true}});
            }
        );
    };

    render() {
        const {address, location, hasError} = this.state;
        return (
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <div className="row">
                    <div className="col-md-8">
                        <p className="lead">
                            Please adjust the raw location.
                        </p>
                        <Form
                            onValidSubmit={this.submit}
                        >
                            <Input
                                name="address"
                                label="Address"
                                required
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
                        <div className="row">
                            <div className="col-sm-12">
                                {!hasError ?
                                    <p className="bg-success">{address}</p>
                                    :
                                    <p className="bg-warning">Address not found.</p>
                                }

                            </div>
                        </div>
                        <MyMapComponent key="map" location={location}/>
                    </div>
                    <div className="col-md-4">
                        <ListGroup>
                            <ListGroupItem onClick={() => {
                                console.log('click')
                            }}>Item 1</ListGroupItem>
                            <ListGroupItem>Item 2</ListGroupItem>
                            <ListGroupItem>...</ListGroupItem>
                        </ListGroup>
                    </div>
                </div>

            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(MapsAction, dispatch)
    }
}

export default connect(
    null,
    mapDispatchToProps
)(MapsInputContainer);
