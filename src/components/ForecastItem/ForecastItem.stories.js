import React from 'react';
import ForecastItem from './ForecastItem';

export default {
    title: 'ForecastItem',
    component: ForecastItem,
}

export const LunesSoleado = () => {
    return(
        <ForecastItem weekDay={'Lunes'} hour={11} state={'clear'} temperature={16}/>
    )
}