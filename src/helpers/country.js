export const getCitiesByCountry = (countries, country) => {
  const cities = countries.find((countryObj) => countryObj.code === country)?.cities || [];
  return cities.map((city) => ({ value: city.code, label: city.name }));
}