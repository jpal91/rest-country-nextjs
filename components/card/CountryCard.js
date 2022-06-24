import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CountryCard = (props) => {
    const { image, pop, region, capital, name, id } = props
    
    let localePop = pop.toLocaleString()
    console.log(id)
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
                contentVisibility: id > 8 ? 'auto' : 'visible'
            }}
        >
            <Box sx={{ transform: "translateY(-10px)" }}>
                <Image
                    src={image}
                    width={305}
                    height={205}
                    alt={`${name}-country-flag`}
                />
            </Box>
            <CardContent
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: 2, mt: -2 }}
            >
                <Typography
                    sx={{
                        color: "primary.text",
                        fontWeight: 800,
                        
                    }}
                >
                    {name}
                </Typography>
                <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ color: 'primary.text', my: 1}}>Population: {localePop}</Typography>
                    <Typography sx={{ color: 'primary.text', my: 1}}>Region: {region}</Typography>
                    <Typography sx={{ color: 'primary.text', my: 1}}>Capital: {capital}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CountryCard;
