import React, { useState, useEffect, useContext } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import CircularProgress from '@mui/material/CircularProgress'

import LoadingContext from '../../helpers/loadingcontext'
import CountryCard from "./CountryCard"

const CountryCardContainer = (props) => {
    const { countryInfo } = props
    const loadingCtx = useContext(LoadingContext)
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

    
    return loadingCtx.loading ? <CircularProgress sx={{ fontSize: 100, zIndex: 1000 }}/> : (
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
        </InfiniteScroll>)
    
} 

export default CountryCardContainer