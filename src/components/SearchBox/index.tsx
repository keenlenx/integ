import { useState } from "react";
import React from "react";
import { useContext } from "react";
import { CountryContext } from "../../pages/Home";

const SearchBox = function(){

  const[value,setvalue]=useState("")
  const {filtered,data,setFiltered} = useContext(CountryContext)
  
  const change= (event :any)=>{
    setvalue(event.target.value)
    const filteredCountry = data?.filter((results)=>results.name.common.toLowerCase().startsWith(event.target.value.toLowerCase()))
    setFiltered(filteredCountry)
    
  }  
  
  
return<>
<input type="text" placeholder="Search" value={value}  onChange={change} />
</>
}

export default SearchBox;