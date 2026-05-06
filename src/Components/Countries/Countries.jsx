import React, { use, useState } from 'react';
import Country from './Country';

const Countries = ({countriesPromise}) => {
    const countries = use(countriesPromise);
    // console.log(countries);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries =(country) =>{
        console.log(country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)     
    }
    const handleVisitedFlags = (flags) =>{
        console.log("visit this site", flags);
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags)
        
    }
    return (
        <div>
            <h2>Travels country:{countries.length}</h2>
            <p>Travels so far :{visitedCountries.length}</p>
            <div className='visited-flags'>
                {
                    visitedFlags.map((flag,index)=><img key={index} src={flag}></img>)
                }
            </div>
            <ol>
                {visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)}
            </ol>
            <div className='countries'>
            {
                countries.map(country=><Country 
                    key={country.cca3}
                     handleVisitedCountries={handleVisitedCountries} 
                     handleVisitedFlags={handleVisitedFlags}
                     country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;