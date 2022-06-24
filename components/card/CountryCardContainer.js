import React from 'react'
import CountryCard from "./CountryCard"

const CountryCardContainer = (props) => {
    const { countryInfo } = props
    
    if (!countryInfo) {
        return
    }

    console.log(countryInfo[0].pop)

    return (
        <React.Fragment>
            {countryInfo.map((country) => (
                <CountryCard 
                    image={country.image}
                    pop={country.pop}
                    region={country.region}
                    capital={country.capital}
                    name={country.name}
                />
            ))}
        </React.Fragment>
    )
} 

export default CountryCardContainer