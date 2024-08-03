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
    .required(REQUIRE_FIELD)
    .min(8, 'La contraseña debe tener al menos 8 caracteres'),
  confirmPassword: Yup.string()
    .required(REQUIRE_FIELD)
    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden'),
});

export const stepTwoValidationSchema = Yup.object({
  phone: Yup.string().optional(REQUIRE_FIELD),
  country: Yup.string().required(REQUIRE_FIELD),
  city: Yup.string().required(REQUIRE_FIELD),
  address: Yup.string().required(REQUIRE_FIELD),
  zipCode: Yup.string().required(REQUIRE_FIELD),
});

export const stepThreeValidationSchema = Yup.object({
  cardNumber: Yup.string().required(REQUIRE_FIELD),
  cvv: Yup.string().required(REQUIRE_FIELD),
  expirationDate: Yup.string().required(REQUIRE_FIELD),
  terms: Yup.bool().oneOf([true], 'Debe aceptar los términos y condiciones'),
});

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
