import React from 'react';
import { render } from '@testing-library/react';
import Forecast from './Forecast';

const forecastItemList=[
    {hour: 13, state:'clear', temperature: 10, weekDay:'Lunes'},
    {hour: 12, state:'clouds', temperature: 21, weekDay:'Martes'},
    {hour: 11, state:'rain', temperature: 12, weekDay:'Miercoles'},
    {hour: 10, state:'snow', temperature: 15, weekDay:'Jueves'},
    {hour: 9, state:'clouds', temperature: 25, weekDay:'Viernes'},
]

test('Forecast render', async () => {
    const { findAllByTestId } = render(
        <Forecast forecastItemList={forecastItemList} />
    )
    const forecastItem = await findAllByTestId('forecast-item-container')
    expect(forecastItem).toHaveLength(5)
})