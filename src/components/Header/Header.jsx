import React from 'react';
import logo from "../../img/logo.png"
import { Heading } from '../Home/style';
const Header = () => {

    const headerContainer={

        width:"97%", 
        backgroundColor:"rgb(252, 237, 218)",
        display:"flex",
        justifyContent:"center",
        padding:"20px"

    }
    return (
        <>
        <div style={headerContainer} className="header-conainer">
            <div className="contani-wraper">
                <img style={{width:"80px"}} src={logo} alt="" />
                <Heading>Wednesday Solutions</Heading>
            </div>
        </div>
            
        </>
    );
};

export default Header;