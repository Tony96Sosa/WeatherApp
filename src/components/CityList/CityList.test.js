import React from 'react';
import CityList from './CityList';
import { render, fireEvent } from '@testing-library/react';

const cities = [
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR"},
    { city: "Bogotá", country: "Colombia", countryCode: "CO"},
    { city: "Madrid", country: "España", countryCode: "ES"},
    { city: "Ciudad de México", country: "México", countryCode: "MX"},
]

test('CityList render', async () => {
    const { findAllByRole } = render(
        <CityList 
            cities={cities}
            onClickCity={() => {}}
        />
    );
    const items = await findAllByRole('button');
    expect(items).toHaveLength(4)
})

test("CityList click on item", async () => {
    const fnClickOnItem = jest.fn();
    const { findAllByRole } = render(
        <CityList 
            cities={cities}
            onClickCity={fnClickOnItem}
        />
        );
    const items = await findAllByRole('button');
    fireEvent.click(items[0]);
    expect(fnClickOnItem).toHaveBeenCalledTimes(1);
})