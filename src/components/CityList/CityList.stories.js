import React from 'react';
import  CityList from './CityList';

export default {
    title: 'CityList',
    component: CityList,
}
const cities = [
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR"},
    { city: "Bogotá", country: "Colombia", countryCode: "CO"},
    { city: "Madrid", country: "España", countryCode: "ES"},
    { city: "Ciudad de México", country: "México", countryCode: "MX"},
]
export const CityListExample = () => <CityList cities={cities} />