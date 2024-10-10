import InputErrorInfo from '../input-error-info/InputErrorInfo';
import './FormField.scss';
import { useRef, useState } from 'react';

function FormField(props) {
    const [errorMessage, setErrorMessage] = useState('');

    const ref = useRef();
    const handleInputChange = (event) => {
        const input = event.target;
        if (input.validity.valid) {
            setErrorMessage('');
        } else if (input.validity.valueMissing) {
            setErrorMessage('This field is required.');
        } else if (input.validity.tooShort) {
            setErrorMessage(`Input must be at least ${input.minLength} characters long`);
        } else if (input.validity.rangeOverflow) {
            setErrorMessage(`Value must be less than or equal to ${input.max}.`);
        }
    }
    return (<div className="form-field">
        <label>{props.label}</label>
        <input type={props.type} ref={ref} name={props.name} required={props.required} max={props.max} minLength={props.minLength} min={props.min} onChange={handleInputChange} />
        {errorMessage &&
            <InputErrorInfo message={errorMessage}>
            </InputErrorInfo>
        }
    </div >)
}

export default FormField;