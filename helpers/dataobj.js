//two functions, one retruns some basic info for HomePage
//second returns more detailed object for [countryid]/details path

export const getData = (arr) => {
    const countryInfo = []

    arr.forEach((d) => {
        let obj = {
            image: '',
            pop: 0,
            region: '',
            capital: '',
            name: '',
            id: ''
        }
        
        obj.image = d.flags.svg || null
        obj.pop = d.population || 0
        obj.region = d.region || null
        obj.capital = d.capital || null
        obj.name = d.name.official || null
        obj.id = d.cca3

        countryInfo.push(obj)
    })

    return countryInfo
}

export const getDetailedData = (obj) => {
    let currencies = Object.keys(obj.currencies)
    let languages = Object.values(obj.languages)
    let nName = Object.values(obj.name.nativeName)
    
    let cDetail = {
        image: obj.flags.svg,
        pop: obj.population,
        name: obj.name.official,
        nativeName: nName[0].common,
        region: obj.region,
        subRegion: obj.subregion,
        capital: obj.capital || null,
        tld: obj.tld[0],
        currency: currencies,
        languages: languages,
        borders: obj.borders || []
    }

    return cDetail
}