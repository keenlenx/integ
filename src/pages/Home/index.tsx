import React, { useEffect, useState } from 'react';

import ContentArea from '../../components/TableSec';
import Header from '../../components/Header';
import TableHeader from '../../components/TableHead';
import Table from '@mui/material/Table';
import useFetchCountries from '../../Hook/useFetchCountries';

import { createContext } from 'react';


type countries={
  flags:{
      png:string
  },
  name:{
      common:string
  }
  region:string,
  languages:{},
  population:number,
  subregion:string,
  
  }[]

  type allCountriesProps= {
    filtered: countries | null | undefined,
    data: countries | null | undefined,
    setFiltered:React.Dispatch<React.SetStateAction<countries | null | undefined>>

   }

export const CountryContext = createContext<allCountriesProps>({} as allCountriesProps)
function Home() {
  const {isLoading,error,data} = useFetchCountries();
  const[filtered,setFiltered]= useState(data)
  
  useEffect(()=>{

setFiltered(data)
  },[data])

  const allCountries = {filtered,data,setFiltered}


  return (
    <CountryContext.Provider value={allCountries}>
    <div className="App">
        <Header/>
          <Table>
            <TableHeader/>
            <ContentArea data={filtered}/>
          </Table>
        
        
    </div>
    </CountryContext.Provider>
  );
}

export default Home;
