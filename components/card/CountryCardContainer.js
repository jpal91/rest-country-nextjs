import React, { useState, useEffect } from 'react'
import CountryCard from "./CountryCard"
import useSWR from 'swr'
import InfiniteScroll from 'react-infinite-scroll-component'

const CountryCardContainer = (props) => {
    const { countryInfo } = props
    const [dataArray, setDataArray] = useState([])

    // useEffect(() => {
    //     if (data) {
    //         newInfo = getData(data)
    //         setCountryData(newInfo.slice(0, 20))
    //         return
    //     }
    // }, [data])

    // if (!data || error) {
    //     return <p>Loading...</p>
    // }

    useEffect(() => {
        if (dataArray.length > 0 || !countryInfo) {
            return
        }
        console.log(dataArray)
        setDataArray(countryInfo.slice(0, 30))

    }, [countryInfo])

    // if (!countryInfo) {
    //     return
    // }
    
    // if (!countryInfo) {
    //     return
    // }

    const fetchMoreData = () => {
        let length = dataArray.length
        let temp = countryInfo.slice(length, length + 30)
        setDataArray([...dataArray, ...temp])
        
        console.log('Here')
        return dataArray
    }

    return (
        <InfiniteScroll
            dataLength={dataArray.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            
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
                    id={i}
                />
                )
        })}
        </InfiniteScroll>
    )
} 

export default CountryCardContainer