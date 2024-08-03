import { useFormikContext } from 'formik';

import { Input } from '../../../components';

export const StepOne = () => {
  const formik = useFormikContext();

  return (
    <section>
      <Input
        label="Nombre completo *"
        name="fullname"
        placeholder="Escriba su nombre completo"
        value={formik.values.fullname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.fullname}
        error={formik.errors.fullname}
      />

      <Input
        label="Correo electrónico *"
        name="email"
        type="email"
        placeholder="Escriba su correo electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.email}
        error={formik.errors.email}
      />

      <Input
        label="Teléfono *"
        name="phone"
        type="tel"
        placeholder="Escriba su número de teléfono"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.phone}
        error={formik.errors.phone}
      />

      <Input
        label="Contraseña *"
        name="password"
        type="password"
        placeholder="Escriba una contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.password}
        error={formik.errors.password}
      />

      <Input
        label="Confirmar contraseña *"
        name="confirmPassword"
        type="password"
        placeholder="Confirme su contraseña"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.confirmPassword}
        error={formik.errors.confirmPassword}
      />
    </section>
  )
}
