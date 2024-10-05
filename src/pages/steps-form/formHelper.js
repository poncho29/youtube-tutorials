import * as Yup from 'yup'; 

const REQUIRE_FIELD = 'Este campo es requerido';

export const INITIAL_VALUES = {
  fullname: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  country: '',
  city: '',
  address: '',
  zipCode: '',
  cardNumber: '',
  cvv: '',
  expirationDate: '',
  terms: false,
  accpetsEmails: false
}

export const stepOneValidationSchema = Yup.object({
  fullname: Yup.string().required(REQUIRE_FIELD),
  email: Yup.string().email('correo invalido').required(REQUIRE_FIELD),
  password: Yup.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .matches(/[a-zA-Z]/, 'La contraseña debe contener al menos una letra')
    .matches(/\d/, 'La contraseña debe contener al menos un número')
    .required(REQUIRE_FIELD),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required(REQUIRE_FIELD)
});

export const stepTwoValidationSchema = Yup.object({
  phone: Yup.string().optional(REQUIRE_FIELD),
  country: Yup.string().required(REQUIRE_FIELD),
  city: Yup.string().required(REQUIRE_FIELD),
  address: Yup.string().required(REQUIRE_FIELD),
  zipCode: Yup.string()
    .max(5, 'El código postal debe tener 5 caracteres')
    .matches(/^\d+$/, 'El código postal debe contener solo números')
    .required(REQUIRE_FIELD)
});

export const stepThreeValidationSchema = Yup.object({
  cardNumber: Yup.string()
    .min(16, 'El número de la tarjeta debe tener al menos 13 dígitos')
    .max(19, 'El número de la tarjeta no debe exceder los 18 dígitos')
    .required(REQUIRE_FIELD),
  cvv: Yup.string()
    .min(3, 'El CVV debe tener al menos 3 dígitos')
    .required(REQUIRE_FIELD),
  expirationDate: Yup.string()
    // Validate MM/YY format
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Formato inválido. Usa MM/YY')
    // Validate that the date is greater than or equal to the current month and year
    .test('expirationDate', 'La fecha de expiración no puede ser anterior al mes actual', (value) => {
      if (!value) return false; // If there is no value, it does not pass validation

      const [month, year] = value.split('/').map(Number); // the value is separated into month and year
      if (!month || !year) return false; // It is validated that the month and year are valid

      const today = new Date();
      const currentMonth = today.getMonth() + 1;
      const currentYear = today.getFullYear() % 100;

      // Compare with current date
      if (year < currentYear) return false;
      if (year === currentYear && month < currentMonth) return false;

      return true;
    })
    .required(REQUIRE_FIELD),
  terms: Yup.bool().oneOf([true], 'Debe aceptar los términos y condiciones'),
});

/**
 * Get Yup validation schema by form step
 * @param { number } step - Form step number
 * @returns Yup validation schema
 */
export const getValidationSchema = (step) => {
  switch (step) {
    case 1:
      return stepOneValidationSchema;
    case 2:
      return stepTwoValidationSchema;
    case 3:
      return stepThreeValidationSchema;
    default:
      return stepOneValidationSchema;
  }
};

/**
     * Mark fields with errors as touched
     * @param { object } errors  Errors object
     * @param { function } setTouched  Formik setTouched function
     * @returns void
     */
export const handleErrors = (errors, setTouched) => {
  if (Object.keys(errors).length > 0) {
    setTouched(
      Object.keys(errors).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {})
    );
  }
};