import { withFormsy } from 'formsy-react';
import React from 'react';
import { FormGroup, Label, Input as InputField, FormFeedback } from 'reactstrap';


class Input extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        this.props.setValue(event.currentTarget.value);
    }

    render() {
        const errorMessage = this.props.getErrorMessage();
        
        return (
            <div>
                <FormGroup>
                    <Label for={this.props.id}>{this.props.title}</Label>
                    <InputField
                        id={this.props.id}
                        name={this.props.name}
                        invalid={(errorMessage !== null ? true : false)}
                        type={(this.props.type === null ? 'text' : this.props.type) }
                        placeholder={this.props.placeholder}
                        value={this.props.getValue() || ''}
                        onChange={this.changeValue}
                    />
                    {errorMessage !== null &&
                        <FormFeedback>{errorMessage}</FormFeedback>
                    }
                </FormGroup>
                
            </div>
        );
    }
}

export default withFormsy(Input);