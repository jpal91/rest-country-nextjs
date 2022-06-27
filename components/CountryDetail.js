import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const CountryDetail = (props) => {
    const { countryInfo } = props

    return (
        <React.Fragment>
            <Grid
                item
                xs={12}
                sx={{ justifyContent: 'flex-start' }}
            >
                <Typography variant='h5' sx={{ fontWeight: 800 }}>{countryInfo.name}</Typography>
            </Grid>
        </React.Fragment>
    )
}

export default CountryDetail