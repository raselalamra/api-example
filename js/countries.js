const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = countries => {
    const countrieszDiv = document.getElementById('countries')
    for (const country of countries){
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountriesByName('${country.name}')">Details</button>
        `
        countrieszDiv.appendChild(div)
    }
}

const loadCountriesByName = name => {
    const url = (`https://restcountries.eu/rest/v2/name/${name}`)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCounrires(data[0]))
}

const displayCounrires = country => {
    const countryDetails = document.getElementById('country-details')
    countryDetails.innerHTML = `
        <h4>${country.name}</h4>
        <p>population: ${country.population}</p>
        <img width="200px" src="${country.flag}">
    `
}