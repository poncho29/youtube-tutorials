import { useFormikContext } from "formik";

import { Checkbox, Input } from "../../../components";

export const StepThree = () => {
  const formik = useFormikContext();

  return (
    <section>
      <Input
        label="Número de tarjeta *"
        name="cardNumber"
        placeholder="Escriba el número de la tarjeta"
        value={formik.values.cardNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.cardNumber}
        error={formik.errors.cardNumber}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Código CVV *"
          name="cvv"
          placeholder="Escriba el código CVV"
          value={formik.values.cvv}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.cvv}
          error={formik.errors.cvv}
        />

        <Input
          label="Fecha de expiración *"
          name="expirationDate"
          placeholder="Escriba la fecha de expiración"
          value={formik.values.expirationDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.expirationDate}
          error={formik.errors.expirationDate}
        />
      </div>

      <Checkbox
        label="¿Aceptas recibir correos electrónicos? *"
        name="accpetsEmails"
        checked={formik.values.accpetsEmails}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.accpetsEmails}
        error={formik.errors.accpetsEmails}
      />

      <Checkbox
        label="¿Aceptas términos y condiciones? *"
        name="terms"
        checked={formik.values.terms}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.terms}
        error={formik.errors.terms}
      />
    </section>
  )
}
