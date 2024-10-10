import './Checkbox.scss';

function Checkbox(props: any) {
    const handleChange = () => {
        props.updateValue(!props.value, props.name);
    }

    return (
        <div className="checkbox-field">
            <label>{props.label}</label>
            <input id={props.id}
                name={props.name}
                type="checkbox"
                onChange={handleChange}
                checked={props.value}
            />
        </div>
    )
}

export default Checkbox;