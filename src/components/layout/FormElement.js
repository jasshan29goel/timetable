import React from 'react';
//import PropTypes from 'prop-types';

const FormElement = (props) => {
    const {label,name,placeholder,type,value,onChange}=props
    return (
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="form-control form-control-lg"
            required
        />
        </div>
    )
}
// FormElement.defaultProps={
//     header:"Time Table"
// };
// FormElement.propTypes={
//     header : PropTypes.string.isRequired
// };
export default FormElement;