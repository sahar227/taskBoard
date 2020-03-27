import {Field, reduxForm} from 'redux-form';
import React from 'react';
import '../styles/UserForm.css';

class UserForm extends React.Component {
    renderInput = ({input, label, type}) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input className="input" type={type} {...input} required/>
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
            <div className="user-form">
                <h1 style={{textAlign: "center"}}>{this.props.title}</h1>
                <form className="form" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                    {this.renderFields()}
                    <button className="submit-button">Submit</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'userForm'
})(UserForm);