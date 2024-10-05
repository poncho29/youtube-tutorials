import { useFormikContext } from 'formik';

import { Input } from '../../../components';

export const StepOne = () => {
  const formik = useFormikContext();

  return (
    <section className="animate-fade-in animate-duration-300">
      <Input
        name="fullname"
        label="Nombre completo *"
        placeholder="Escriba su nombre completo"
        value={formik.values.fullname}
        touched={formik.touched.fullname}
        error={formik.errors.fullname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <Input
        type="email"
        name="email"
        label="Correo electrónico *"
        placeholder="Escriba su correo electrónico"
        value={formik.values.email}
        error={formik.errors.email}
        touched={formik.touched.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <Input
        type="tel"
        name="phone"
        label="Teléfono *"
        placeholder="Escriba su número de teléfono"
        value={formik.values.phone}
        error={formik.errors.phone}
        touched={formik.touched.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <Input
        type="password"
        name="password"
        label="Contraseña *"
        placeholder="Escriba una contraseña"
        value={formik.values.password}
        error={formik.errors.password}
        touched={formik.touched.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <Input
        type="password"
        name="confirmPassword"
        label="Confirmar contraseña *"
        placeholder="Confirme su contraseña"
        value={formik.values.confirmPassword}
        error={formik.errors.confirmPassword}
        touched={formik.touched.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </section>
  )
}
