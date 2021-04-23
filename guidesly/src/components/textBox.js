import React from 'react';

const FormInput = ({type, id, name, onChange, value, placeholder, className }) => {
    return(
        <>
        <input type={type} id={id} name={name} onChange={onChange} value={value} placeholder={placeholder} className={className} />
        </>
    )
}

export default FormInput;