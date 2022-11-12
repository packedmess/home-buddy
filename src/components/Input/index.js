import './style.scss';

export const Input = ({
  id,
  type,
  name,
  value,
  placeholder,
  required,
  className,
}) => {
  return (
    <div className={`input ${className}`}>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className='input__input'
      />
      <label for='zip' className='input__label'>
        Enter ZIP Code
      </label>
    </div>
  );
};
