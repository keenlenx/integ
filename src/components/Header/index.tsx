import React from "react";
import HamMenu from "../HamMenu";
import SearchBox from "../SearchBox";

const Header = ()=>{

return <div className="header">
    <div className="header-container">
    <HamMenu/>
    <SearchBox/>
    </div>

</div>
}

export default Header;