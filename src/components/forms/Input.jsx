import PropTypes from 'prop-types';

export const Input = ({
  label,
  type = 'text',
  name,
  className = '',
  value,
  onChange,
  onBlur,
  touched,
  error = '',
  ...props
}) => {
  return (
    <div className="mb-2">
      <label
        htmlFor={name}
        className="block mb-1"
      >
        {label}
      </label>
      
      <input
        id={name}
        type={type}
        name={name}
        className={`w-full p-2 rounded-lg mb-1 ${className}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {touched && error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.bool.isRequired,
  error: PropTypes.string,
  // Optional props
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
}
