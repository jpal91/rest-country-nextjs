import { useContext } from 'react'
import Image from "next/image";
import { useRouter } from 'next/router';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ButtonBase from '@mui/material/ButtonBase'

import LoadingContext from "../../helpers/loadingcontext";

//individual country card that makes up the CountryCardContainer
const CountryCard = (props) => {
    const { image, pop, region, capital, name, id, count } = props
    const loadingCtx = useContext(LoadingContext)
    const router = useRouter()
    
    let localePop = pop.toLocaleString()

    const handleCountryClick = (pageid) => {
        loadingCtx.changeLoadingState()
        router.push(`/country/${pageid}`)
    }

    return (
        <Card
            sx={{
                width: 300,
                height: 400,
                mx: 3,
                flexDirection: "column",
                overflow: "hidden",
                my: 1,
                backgroundColor: "background.secondary",
                
            }}
        >
            
            <Box sx={{ transform: "translateY(-10px)"}}>
                <ButtonBase onClick={() => handleCountryClick(id)} sx={{ position: 'relative', width: 305, height: 205 }}>
                <Image
                    src={image || '/vercel.svg'}
                    layout='fill'
                    priority={count <= 30 ? true : false}
                    objectFit='contain'
                    objectPosition={'50% 50%'}
                    alt={`${name}-country-flag`}
                />
                </ButtonBase>
            </Box>
            <CardContent
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: 2, mt: -1 }}
            >
                <Typography
                    variant='h6'
                >
                    {name}
                </Typography>
                <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='body1' sx={{ my: 1 }}>Population: {localePop}</Typography>
                   <Typography className='span' variant='body1'>Region: {region}
                   </Typography>
                    <Typography variant='body1' sx={{ my: 1 }}>Capital: {capital}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CountryCard;
