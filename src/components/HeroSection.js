import React from 'react'
import sme from '../sme.png'
import fom from '../fom.png'
import cop from '../cop.png'
import gad from '../gad.png'
import ngo from '../ngo.png'




 function HeroSection() {
    return (
        <div className="heroSection">
            <h1>Choose The Type of Your Business</h1>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                         <img src={sme} className="sme1" />
                         <h4> individuals and Small Businesses</h4>
                         <p>Are you looking for a custom software,
                             mobile or web solution that handles
                             your business needs?
                         </p>
                     </div>
                     <div className="flip-card-back">
                         <img src={fom} className="fom1" />
                      </div>
                 </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                         <img src={cop} className="sme1" />
                         <h4>Corporate and Enterprise Businesses </h4>
                         <p>Are you looking for End to End Software or Web 
                            Technology Solution that is tailored to your Business
                            requirements ? 
                         </p>
                     </div>
                     <div className="flip-card-back">
                         <img src={fom} className="fom1" />
                      </div>
                 </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                         <img src={gad} className="sme1" />
                         <h4>Government Agencies and Organisations</h4>
                         <p>Are you looking for a custom software,
                             mobile or web solution that handles
                             your business needs?
                         </p>
                     </div>
                     <div className="flip-card-back">
                         <img src={fom} className="fom1" />
                      </div>
                 </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                         <img src={ngo} className="sme1" />
                         <h4>Non Governmental Organisations</h4>
                         <p>Are you looking for a custom software,
                             mobile or web solution that handles
                             your business needs?
                         </p>
                     </div>
                     <div className="flip-card-back">
                         <img src={fom} className="fom1" />
                      </div>
                 </div>
            </div>
            
        </div>
    )
}
export default HeroSection