console.log ("working");
console.log ("double working");

// let countries=

const api = {
    base: "https://restcountries.eu/rest/v2/"
}
// function countryData () {
fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => initialize(data))
    .catch(err => console.log("Error",err))
        // .then (function(data){
        //     console.log(data);
        // }).then(displayCard);
 
   
function initialize(countriesData) {
        console.log(countriesData);

        const newCountries = countriesData.map((country) => {
                return `
                <div class = fullCard> 
                <img src= "${country.flag}"/>
                <p> Country - ${country.name}</p>
                <p> Capital - ${country.capital}</p>
                <p> Region - ${country.region}</p>
                <p> Sub-Region - ${country.subregion}</p>                
                </div>
                `
        })
        console.log (newCountries)
        document.getElementById("name").innerHTML = newCountries;
        // countries = countriesData;
        // let names = "";
        // for(let i=0; i<countries.length; i++){
        //     names = `<p>${countries[i].name}</p>`
        // }
        // console.log(countries[0].name)
        // console.log(countries[1].name)

    }

        // console.log(countriesData[1])
        // return `
        // <p>${countriesData.name}</p>
        // `



// setTimeout(() => {})
// const countryCardData = jsonResponse.map(countries => {
   

// console.log(countryData)
// console.log("try again last")

// countryData()