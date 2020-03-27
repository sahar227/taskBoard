import {Field, reduxForm} from 'redux-form';
import React from 'react';

class UserForm extends React.Component {
    renderInput = ({input, label, type}) => {
        return (
            <div>
                <label>{label}</label>
                <input type={type} {...input} required/>
            </div>
        )
    };

    renderFields = () => {
        const {fields} = this.props;
        return fields.map( field => 
            <Field key={field.name} name={field.name} component={this.renderInput} label={field.label} type={field.type}/>
        );
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                {this.renderFields()}
                <button>Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'userForm'
})(UserForm);