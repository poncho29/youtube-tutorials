import { useState } from 'react';

import { useFormikContext } from 'formik';

import { Input, Select } from '../../../components';

import data from '../data/countries.json';

const countries = data.countries.map((country) => (
  { value: country.code, label: country.name }
));

export const StepTwo = () => {
  const formik = useFormikContext();

  const [cities, setCities] = useState([]);

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;

    formik.setFieldValue('country', countryCode);

    if (countryCode === '') {
      formik.setFieldValue('city', '');
      setCities([]);
      return;
    }

    const citiesOfSelectedCountry = data.countries.find((country) => country.code === countryCode).cities || [];
    const selectedCities = citiesOfSelectedCountry.map(country => ({ value: country.code, label: country.name }));

    setCities(selectedCities);
  };

  return (
    <section>
      <Select
        label="País *"
        name="country"
        options={countries}
        value={formik.values.country}
        onChange={handleCountryChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.country}
        error={formik.errors.country}
      />

      <Select
        label="Ciudad *"
        name="city"
        options={cities}
        value={formik.values.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.city}
        error={formik.errors.city}
        disabled={formik.values.country === ''}
      />

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
