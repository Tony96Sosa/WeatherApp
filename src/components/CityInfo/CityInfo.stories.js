import React from 'react';
import CityInfo from './CityInfo';

export default {
    title: 'CityInfo',
    component: CityInfo,
}

export const CityExample1 = () => 
    <CityInfo 
        city={ 'Buenos Aires' } 
        country={ 'Argentina' }
    />
export const CityExample2 = () => 
<CityInfo 
    city={ 'Lima' } 
    country={ 'Perú' }
/>
export const CityExample3 = () => 
<CityInfo 
    city={ 'Bogota' } 
    country={ 'Colombia' }
/>