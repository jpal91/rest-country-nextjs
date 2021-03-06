import React, { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

import LoadingContext from '../helpers/loadingcontext'

const CountryDetail = (props) => {
    const { pop, name, nativeName, region, subRegion, capital, tld, currency, languages, borders } = props.countryInfo
    const loadingCtx = useContext(LoadingContext)
    const router = useRouter()
    let localePop = pop.toLocaleString()

    useEffect(() => {
        loadingCtx.changeLoadingState()
    }, [])

    return (
        <React.Fragment>
            <Grid
                container
                item
                xs={12}
                sx={{ justifyContent: 'flex-start' }}
            >
                <Typography variant='h5'>{name}</Typography>
            </Grid>
            
            <Grid
                container
                item
                xs={12}
                lg={6}
                sx={{ justifyContent: 'flex-start', alignContent: 'flex-start', flexDirection: 'column', mt: 1}}
            >
                <Typography variant='body1' sx={{ m: 1 }}>{`Native Name: ${nativeName}`}</Typography>
                <Typography variant='body1' sx={{ m: 1 }}>{`Population: ${localePop}`}</Typography>
                <Typography variant='body1' sx={{ m: 1 }}>{`Region: ${region}`}</Typography>
                <Typography variant='body1' sx={{ m: 1 }}>{`Sub Region: ${subRegion}`}</Typography>
                <Typography variant='body1' sx={{ m: 1 }}>{`Capital: ${capital}`}</Typography>

            </Grid>
            <Grid
                container
                item
                xs={12}
                lg={6}
                sx={{ justifyContent: 'flex-start', alignContent: 'flex-start', flexDirection: 'column', mt: 1}}
            >
                <Typography variant='body1' sx={{ m: 1 }}>{`Top Level Domain: ${tld}`}</Typography>
                <Typography variant='body1' sx={{ m: 1 }}>{`Currencies: ${currency}`}</Typography>
                <Typography variant='body1' sx={{ m: 1 }}>{`Languages: ${languages}`}</Typography>
            </Grid>
            <Grid
                item
                xs={12}
                lg={6}
                sx={{ mt: 2 }}
            >
                <Typography variant='body1'>Border Countries:</Typography>
            </Grid>
            <Grid
                container
                item
                xs={12}
                lg={6}
                sx={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', mt: 1}}
            >
                
                {borders.length > 0 && borders.map((b, i) => (
                    <Paper sx={{ backgroundColor: 'background.secondary', m: 0.5 }} key={`border${i}`} >
                        <Link href={`/country/${b}`}>
                        <a style={{ textDecoration: 'none' }}><Button variant='outlined'>{b}</Button></a>
                        </Link>
                    </Paper>
                ))}
            </Grid>
        </React.Fragment>
    )
}

export default CountryDetail