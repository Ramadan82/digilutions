import React from 'react'
import Typed from "react-typed"
const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Providing Technology Solutions that Empower You</h1>
                <Typed 
                className="typed-text"
                strings={["Web Applications", "Custom Software Solutions", "Mobile Applications", "Business Software Solutions", "Desktop Software Applications", "IT Consulting"]}
                typeSpeed={150}
                backSpeed={150}
                loop
                />
                <a href="#" className="btn-main-offer" >Contact Us</a>

            </div>
        
        </div>
    )
}

export default Header
