import React, { useState, useEffect, useContext } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import CircularProgress from '@mui/material/CircularProgress'

import LoadingContext from '../../helpers/loadingcontext'
import CountryCard from "./CountryCard"

//the container that holds each individual country card
const CountryCardContainer = (props) => {
    const { countryInfo } = props
    const loadingCtx = useContext(LoadingContext)
    const [dataArray, setDataArray] = useState(countryInfo)

    //had a problem initially with render too large of a DOM because of statically
    //rendering 250+ countries
    //part of the solution is to add InfiniteScroll below but only start the app
    //with the first 30 countries that come from the REST Countries list
    useEffect(() => {
        if (!countryInfo) {
            return
        }
        
        setDataArray(countryInfo.slice(0, 30))

    }, [countryInfo])

    if (!countryInfo) {
        return <p>Loading...</p>
    }

    //used for InfiniteScroll
    const fetchMoreData = () => {
        let length = dataArray.length
        let temp = countryInfo.slice(length, length + 30)
        setDataArray([...dataArray, ...temp])
        
        return dataArray
    }

    //If loading returns a progress icon
    //if not, will return the InfiniteScroll component with the first 30 countries on the list
    //setup is based on the docs, but will take the initial list and compare it with the
    //total list that comes from the HomePage. If there's more, and the user has scrolled
    //close to the bottom, 30 more will be taken off the list and added to the working list
    //user won't notice any difference, but the initial DOM render only has 30 countries total
    return loadingCtx.loading ? <CircularProgress sx={{ fontSize: 100, zIndex: 1000, color: 'primary.text' }}/> : (
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
                    count={i}
                />
                )
            })}
        </InfiniteScroll>)
    
} 

export default CountryCardContainer