import { useFormikContext } from 'formik';

import { Input } from '../../../components';

export const StepTwo = () => {
  const formik = useFormikContext();

  return (
    <section>
      <Input
        label="Dirección *"
        name="address"
        placeholder="Escriba su dirección"
        value={formik.values.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.address}
        error={formik.errors.address}
      />
      
      <Input
        label="Código postal *"
        name="zipCode"
        placeholder="Escriba su código postal"
        value={formik.values.zipCode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.zipCode}
        error={formik.errors.zipCode}
      />
    </section>
  )
}
