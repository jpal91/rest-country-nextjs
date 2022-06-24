export const getData = (arr) => {
    const countryInfo = []

    arr.forEach((d) => {
        let obj = {
            image: '',
            pop: 0,
            region: '',
            capital: '',
            name: ''
        }
        
        obj.image = d.flags.svg || null
        obj.pop = d.population || 0
        obj.region = d.region || null
        obj.capital = d.capital || null
        obj.name = d.name.official || null

        countryInfo.push(obj)
    })

    return countryInfo
}