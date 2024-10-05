import PropTypes from 'prop-types';

export const Select = ({
  label,
  name,
  className = '',
  value,
  options,
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

      <select
        id={name}
        name={name}
        className={`w-full p-2 rounded-lg mb-1 ${className}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      >
        <option value="">Seleccione una opción</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {touched && error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  )
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  // value: PropTypes.shape({
  //   label: PropTypes.string,
  //   value: PropTypes.string,
  // }).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string,

  // Optional props
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
}
