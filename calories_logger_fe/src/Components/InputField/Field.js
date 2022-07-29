import './Field.css';
const Field = ({
    name = '',
    labelText = '',
    type = 'text',
    value = '',
    placeholder = '',
    onChange = () => {},
    ...rest
}) => {
    return (
        <fieldset className="input">
            <label htmlFor={name}>{labelText}</label>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                {...rest}
            />
        </fieldset>
    );
};

export default Field;
