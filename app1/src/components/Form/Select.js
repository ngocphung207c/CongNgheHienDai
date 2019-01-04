import { withFormsy } from 'formsy-react';
import React from 'react';
import { FormGroup, Label, Input as InputField, FormFeedback } from 'reactstrap';

class Select extends React.Component {
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
                        type="select"
                        placeholder={this.props.placeholder}
                        onChange={this.changeValue}
                    >
                        {this.props.options.map((item, key) => (
                            <option value={item.value} key={key}>{item.label}</option>
                        ))}
                    </InputField>
                    {errorMessage !== null &&
                        <FormFeedback>{errorMessage}</FormFeedback>
                    }
                </FormGroup>
            </div>
        );
    }
}

export default withFormsy(Select);