import React from 'react';
import { render } from '@testing-library/react';
import CityInfo from './CityInfo';

test("CityInfo render", async () => {
    const { findAllByRole } = render(
        <CityInfo 
            city='Buenos Aires'
            country='Argentina'
        />
    );
    const arrayComponennts = await findAllByRole("heading");
    expect(arrayComponennts[0]).toHaveTextContent('Buenos Aires');
    expect(arrayComponennts[1]).toHaveTextContent('Argentina');
})