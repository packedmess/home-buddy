import './style.scss';

export const Input = ({
  id,
  type,
  name,
  label,
  placeholder,
  required,
  onChange,
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
        onChange={(e) => onChange(e)}
      />
      <label htmlFor='zip' className='input__label'>
        {label}
      </label>
    </div>
  );
};
