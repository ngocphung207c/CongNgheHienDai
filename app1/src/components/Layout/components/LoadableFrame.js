import React from 'react';
import { connect } from 'react-redux';
import Loadable from 'react-loading-overlay';
import { ToastContainer } from 'react-toastify';

class LoadableFrame extends React.Component {  
    
    render() { 

        var propertiesLoading = {};
        
        if(this.props.isBackground === false) {
            propertiesLoading = {
                background: "false",
                color: "#000"
            }
        }

        return (
            <Loadable
                active={this.props.isShowing}
                spinner
                {...propertiesLoading}
                >
                
                    {this.props.children}
                    <ToastContainer 
                        autoClose={2000}
                        hideProgressBar={true}
                        />

            </Loadable>
        )
    }
};

function mapStateToProps(state) {
    return { 
        isShowing: state.layout.isShowing
    };
}

export default connect(
    mapStateToProps
)(LoadableFrame);
