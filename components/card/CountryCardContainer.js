import React, { useState, useEffect } from 'react'
import CountryCard from "./CountryCard"
import InfiniteScroll from 'react-infinite-scroll-component'

const CountryCardContainer = (props) => {
    const { countryInfo } = props
    const [dataArray, setDataArray] = useState(countryInfo)

    useEffect(() => {
        setDataArray(countryInfo)

    }, [countryInfo])

    if (!countryInfo) {
        return <p>Loading...</p>
    }


    const fetchMoreData = () => {
        let length = dataArray.length
        let temp = countryInfo.slice(length, length + 30)
        setDataArray([...dataArray, ...temp])
        
        return dataArray
    }

    return (
        <InfiniteScroll
            dataLength={dataArray.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}
        >
            {dataArray.map((country, i) => {
                return (
                <CountryCard 
                    image={country.image}
                    pop={country.pop}
                    region={country.region}
                    capital={country.capital}
                    name={country.name}
                    key={i}
                    id={country.id}
                />
                )
        })}
        </InfiniteScroll>
    )
} 

export default CountryCardContainer