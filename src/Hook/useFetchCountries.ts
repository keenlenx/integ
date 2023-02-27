import axios from "axios";
import { useEffect, useState } from "react";
import { isExportAssignment } from "typescript";

const useFetchCountries = ()=>{
const [isLoading,setLoading]= useState(true);
const [error,setError]= useState("");

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
    subregion:string
    
    }[]

const [data,setData]=useState<countries| null>();


useEffect(()=>{

countries();
},[])

const countries = async ()=>{

    const url = "https://restcountries.com/v3.1/all"
    
    try{
        const results =  await axios.get(url);
        const countryResults = await results.data;
        if(results.status===200){
            setData(countryResults)
            setLoading(false);
            
        }else{
            throw Error;
        }


    }catch(error:any)
    {
        setError(error)
    }
    

}


return {isLoading,data,error}
}

export default useFetchCountries;
