import { useEffect, useState } from 'react';

import { useFormikContext } from 'formik';

import { getCitiesByCountry } from '../../../helpers';

import { Input, Select } from '../../../components';

import data from '../data/countries.json';

const countries = data.countries.map((country) => (
  { value: country.code, label: country.name }
));

export const StepTwo = () => {
  const formik = useFormikContext();

  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (formik.values.country === '') return;

    const selectedCities = getCitiesByCountry(data.countries, formik.values.country);
    setCities(selectedCities);
  }, [formik.values.country]);

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;

    formik.setFieldValue('country', countryCode);

    if (countryCode === '') {
      formik.setFieldValue('city', '');
      setCities([]);
      return;
    }

    const selectedCities = getCitiesByCountry(data.countries, countryCode);

    setCities(selectedCities);
  };

  return (
    <section className="animate-fade-in animate-duration-300">
      <Select
        name="country"
        label="País *"
        options={countries}
        value={formik.values.country}
        error={formik.errors.country}
        touched={formik.touched.country}
        onChange={handleCountryChange}
        onBlur={formik.handleBlur}
      />

      <Select
        name="city"
        label="Ciudad *"
        options={cities}
        value={formik.values.city}
        error={formik.errors.city}
        touched={formik.touched.city}
        disabled={formik.values.country === ''}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <Input
        name="address"
        label="Dirección *"
        placeholder="Escriba su dirección"
        value={formik.values.address}
        error={formik.errors.address}
        touched={formik.touched.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      
      <Input
        name="zipCode"
        label="Código postal *"
        placeholder="Escriba su código postal"
        maxLength={5}
        value={formik.values.zipCode}
        error={formik.errors.zipCode}
        touched={formik.touched.zipCode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </section>
  )
}
