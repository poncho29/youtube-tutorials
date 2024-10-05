import PropTypes from 'prop-types';

export const Checkbox = ({
  label,
  name,
  className = '',
  checked,
  onChange,
  onBlur,
  touched,
  error = '',
  ...props
}) => {
  return (
    <div className="mb-2">
      <div className="flex items-center mb-1">
        <input
          id={name}
          type="checkbox"
          name={name}
          className={`w-4 h-4 mr-2 ${className}`}
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
        />
        
        <label
          htmlFor={name}
          className="block"
        >
          {label}
        </label>
      </div>

      {touched && error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string,
}
