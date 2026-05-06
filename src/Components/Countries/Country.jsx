import React, { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    // console.log(handleVisitedCountries);
    
    const [visited, setVisited] = useState(false)
    const handleVisitBtn = () =>{
        // if(visited === true){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        setVisited(!visited)
        handleVisitedCountries(country)
    }
    return (
        <div className={`country ${visited&&'country-visited'}`}>
            
            <img src={country.flags.png} alt="" />
        <div >
                <h2>name :{country.name.common}</h2>
            <p>startOfWeek : {country.startOfWeek}</p>
            <h4>independent:{country.independent?"free":"not free"}</h4>
            <p>population:{country.population}</p>
            <button className={visited?"btn-visited":"btn not visited"} onClick={handleVisitBtn}>{visited?"visited":"not visited"}</button>
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>flags</button>
        </div>
        </div>
    );
};

export default Country;