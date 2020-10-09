import React from 'react';
import CityInfo from '../components/CityInfo';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';
import ForecastChart from '../components/ForecastChart';
import Forecast from '../components/Forecast';
import Grid from '@material-ui/core/Grid';
import AppFrame from '../components/AppFrame';

const data =  [
    {"dayHour": 'Jue 18',
    'min': 14,
    'max':22,
    },
    {'dayHour': 'Vie 06',
    'min': 18,
    'max':27,
    },
    {'dayHour': 'Vie 12',
    'min': 18,
    'max':28,
    },
    {'dayHour': 'Vie 18',
    'min': 18,
    'max':25,
    },
    {'dayHour': 'Sab 06',
    'min': 15,
    'max':22,
    },
    {'dayHour': 'Sab 12',
    'min': 12,
    'max':19,
    }
]

const forecastItemList=[
    {hour: 13, state:'sunny', temperature: 10, weekDay:'Lunes'},
    {hour: 12, state:'cloudy', temperature: 21, weekDay:'Martes'},
    {hour: 11, state:'rain', temperature: 12, weekDay:'Miercoles'},
    {hour: 10, state:'fog', temperature: 15, weekDay:'Jueves'},
    {hour: 9, state:'cloud', temperature: 25, weekDay:'Viernes'},
]

const CityPage = () => {
    return(
        <AppFrame>
            <Grid container
            justify='center'
            direction='column'
            spacing={2}>
                <Grid item container
                    justify='center'
                    alignItems='flex-end'
                    xs={12}>
                    <CityInfo  city={ 'Buenos Aires' } country={ 'Argentina' }/>
                </Grid>
                <Grid item container 
                    xs={12}
                    justify='center'>
                    <Weather temperature={ 10 } state="clear"/> 
                    <WeatherDetails humidity={10} wind={9}/>
                </Grid>
                <Grid item>
                    <ForecastChart data={data}/>
                </Grid>
                <Grid item>
                    <Forecast forecastItemList={forecastItemList}/>
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default CityPage;