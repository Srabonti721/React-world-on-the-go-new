import React, { use } from 'react';
import Country from './Country';

const Countries = ({countriesPromise}) => {
    const countries = use(countriesPromise);
    console.log(countries);
    
    return (
        <div>
            <h2>travels country:{countries.length}</h2>
            <div className='countries'>
            {
                countries.map(country=><Country key={country.cca3} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;