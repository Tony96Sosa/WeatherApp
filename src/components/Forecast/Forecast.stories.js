import React from 'react';
import Forecast from './Forecast';

export default {
    title: 'Forecast',
    component: Forecast,
}

const forecastItemList=[
    {hour: 13, state:'clear', temperature: 10, weekDay:'Lunes'},
    {hour: 12, state:'clouds', temperature: 21, weekDay:'Martes'},
    {hour: 11, state:'rain', temperature: 12, weekDay:'Miercoles'},
    {hour: 10, state:'snow', temperature: 15, weekDay:'Jueves'},
    {hour: 9, state:'drizzle', temperature: 25, weekDay:'Viernes'},
    {hour: 6, state:'thunderstorm', temperature: 25, weekDay:'Sabado'},
]

export const ForecastExample = () => (
        <Forecast forecastItemList={forecastItemList} />
    )