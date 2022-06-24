import React, { useState, useEffect } from 'react'
import CountryCard from "./CountryCard"
import useSWR from 'swr'
import InfiniteScroll from 'react-infinite-scroll-component'

const CountryCardContainer = (props) => {
    const { countryInfo } = props
    let newInfo
    const [countryData, setCountryData] = useState(countryInfo)
    const [index, setIndex] = useState(0)
    const fetcher = (url) => axios.get(url).then((res) => res.data)
    const { data, error } = useSWR('https://restcountries.com/v3.1/all', fetcher)

    useEffect(() => {
        if (data) {
            newInfo = getData(data)
            setCountryData(newInfo.slice(0, 20))
            return
        }
    }, [data])

    if (!data || error) {
        return <p>Loading...</p>
    }
    
    // if (!countryInfo) {
    //     return
    // }

    const fetchMoreData = () => {
        let length = countryData.length
        let temp = newInfo.slice(length, length + 20)
        setCountryData([countryData, ...temp])
        
        
        return countryData
    }

    return (
        <InfiniteScroll
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        >
            {countryData.map((country, i) => {
                return (
                <CountryCard 
                    image={country.image}
                    pop={country.pop}
                    region={country.region}
                    capital={country.capital}
                    name={country.name}
                    key={i}
                    id={i}
                />
                )
        })}
        </InfiniteScroll>
    )
} 

export default CountryCardContainer