import React from "react"
import CountryDetails from "./pages/CountryDetails"
import Home from "./pages/Home"

import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
const App = ()=>{

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="country/:id" element={<CountryDetails />}></Route>
      </Routes>
    </BrowserRouter>)
  
}

export default App