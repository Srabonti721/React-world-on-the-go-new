import React from 'react';
import './country.css'
const Country = ({country}) => {
    const handleVisitBtn = () =>{
        
    }
    return (
        <div className='country'>
            
            <img src={country.flags.png} alt="" />
        <div >
                <h2>name :{country.name.common}</h2>
            <p>startOfWeek : {country.startOfWeek}</p>
            <h4>independent:{country.independent?"free":"not free"}</h4>
            <p>population:{country.population}</p>
            <button onClick={handleVisitBtn}>not visited</button>
        </div>
        </div>
    );
};

export default Country;