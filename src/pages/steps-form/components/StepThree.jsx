import { useFormikContext } from "formik";

import { Checkbox, Input } from "../../../components";

export const StepThree = () => {
  const formik = useFormikContext();

  const handleChangeCardNumber = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove all non-digit numbers
    let formattedValue = value.replace(/(\d{4})/g, '$1 ').trim(); // Format in blocks of 4 digits
    formik.setFieldValue('cardNumber', formattedValue);
  }

  const handleChangeCVV = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove all non-digit numbers
    formik.setFieldValue('cvv', value);
  }

  const handleChangeExpirationDate = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove all non-digit numbers
    // Allow to automatically remove the "/" when there are less than 3 digits (include /)
    if (value.length < 3) {
      formik.setFieldValue('expirationDate', value);
    } else if (value.length <= 5) {
      // Insert "/" after the first two digits if there are more than 2
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
      formik.setFieldValue('expirationDate', value);
    }
  }

  return (
    <section className="animate-fade-in animate-duration-300">
      <Input
        name="cardNumber"
        label="Número de tarjeta *"
        placeholder="Escriba el número de la tarjeta"
        minLength={13}
        maxLength={19}
        value={formik.values.cardNumber}
        error={formik.errors.cardNumber}
        touched={formik.touched.cardNumber}
        onChange={handleChangeCardNumber}
        onBlur={formik.handleBlur}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          name="cvv"
          label="Código CVV *"
          placeholder="Escriba el código CVV"
          minLength={3}
          maxLength={4}
          value={formik.values.cvv}
          error={formik.errors.cvv}
          touched={formik.touched.cvv}
          onChange={handleChangeCVV}
          onBlur={formik.handleBlur}
        />

        <Input
          name="expirationDate"
          label="Fecha de expiración *"
          placeholder="Escriba la fecha de expiración"
          minLength={5}
          maxLength={5}
          value={formik.values.expirationDate}
          error={formik.errors.expirationDate}
          touched={formik.touched.expirationDate}
          onChange={handleChangeExpirationDate}
          onBlur={formik.handleBlur}
        />
      </div>

      <Checkbox
        name="accpetsEmails"
        label="¿Aceptas recibir correos electrónicos?"
        checked={formik.values.accpetsEmails}
        error={formik.errors.accpetsEmails}
        touched={formik.touched.accpetsEmails}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <Checkbox
        name="terms"
        label="¿Aceptas términos y condiciones? *"
        checked={formik.values.terms}
        error={formik.errors.terms}
        touched={formik.touched.terms}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </section>
  )
}
