import React from 'react';
import Formsy from 'formsy-react';
import _ from 'lodash';

class Form extends React.Component {

    notifyFormError = (data, resetForm, invalidateForm) => {
        let errs = {}
        this.refs.form.inputs.forEach( (input) => {
            
            if(input.showRequired()) {
                errs[input.props.name] = _.isEmpty(input.props.validationError) === false ? input.props.validationError : 'Please fill out this field';
            }
        })
        invalidateForm(errs);
    }

    render() {
        return (
            <Formsy name={this.props.name}
                    onValidSubmit={this.props.onValidSubmit}
                    onInvalidSubmit={this.notifyFormError}
                    ref="form"
                    >
                    {this.props.children}
            </Formsy>
        );
    }
}

export default Form;