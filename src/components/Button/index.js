import './style.scss';

export const Button = ({
  type = 'button',
  disabled,
  className,
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
