import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import convert from 'convert-units';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Weather from '../Weather/Weather';
import CityInfo from '../CityInfo/CityInfo';

const renderCityAndCountry = onClickCity => (cityandCountry, weather) => {
    const { city, country }  = cityandCountry;
    return (
        <ListItem 
            button
            key={city} 
            onClick={onClickCity}>
            <Grid container
                justify="center"
                alignItems="center">
                <Grid item
                    md={9} 
                    xs={12}>
                    <CityInfo city={ city } country={ country }/>
                </Grid>
                <Grid item
                    md={3} 
                    xs={12}>
                    <Weather 
                        temperature={ weather && weather.temperature } 
                        state={ weather && weather.state } />
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {
    const [allWeather, setAllWeather] = useState({});
    useEffect(() => {
        const setWeather = (city, country, countryCode) => {
            const appid = '7cbf8984dbdfe9a3b2b434657860404a';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`;
            axios
                .get(url)
                .then(res => {
                    const { data } = res;
                    const temperature = Number(convert(data.main.temp).from('K').to('C').toFixed(0));
                    const state = data.weather[0].main.toLowerCase();
                    const propName = `${city}-${country}`;
                    const propValue = {temperature, state};
                    console.log('propName',propName);
                    console.log('propValue',propValue);
                    setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }))
                })
        }
        cities.forEach( ({ city, country, countryCode }) => {
            setWeather(city, country, countryCode)
        })
    }, [cities]);

    return(
        <List>
            {
                cities.map( cityandCountry => renderCityAndCountry(onClickCity)(cityandCountry, allWeather[`${cityandCountry.city}-${cityandCountry.country}`]))
            }
        </List>
    )
}
CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList;