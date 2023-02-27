import { useParams } from 'react-router';
import React from 'react';

import useFetchCountries from '../../Hook/useFetchCountries';

import Avatar from '@mui/material/Avatar';
const CountryDetails = ()=>{
    let {id}= useParams();

    const {data} = useFetchCountries();


   const countryD = data?.find((results)=>results.name.common.toLowerCase().startsWith(id!?.toLowerCase()));
console.log(countryD)
    return <div className="country-details">
        <div>
        <div className="country-detail-heading">
         <Avatar>{countryD?.name.common.charAt(0)}</Avatar>
         {countryD?.name.common}
        </div>
        <div className="country-detail-image">
            <img src={countryD?.flags.png} width="300px" height="300px"/>

        </div>
        <div className="country-detail-footer">

            {`The country belongs to ${countryD?.region}  and ${countryD?.subregion} sub region, Located at  , This country has ${countryD?.population} of and it
             has gained the independece, according to the CIA world FactBook`}
        
        </div>
        </div>


    
    </div>
}

export default CountryDetails