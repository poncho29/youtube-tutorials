import PropTypes from 'prop-types';

export const Button = ({
  type = 'button',
  disabled = false,
  className,
  onClick,
  children
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        w-full p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600
        ${disabled && 'opacity-50'} ${className}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}