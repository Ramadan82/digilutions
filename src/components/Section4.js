import react from "react";
import consulting from '../consulting.png';
import customapp from '../customapp.png';
import implementation from '../implemmentation.png';
import manhosting from '../manhosting.png';
import back from '../back.png';

const Section4 = () => {
    return (
        <div className="section4">
            <h1>Our Services</h1>
         <div className="top-flipcard"> 
            <div className="flip-card1">
               
                <div className="flip-card-inner1">
                    <div className="flip-card-front1">
                         <img src={consulting} className="consulting" />
                         <h4> IT Consulting</h4>
                         <p>We utilize our extensive experience and knowledge of today's 
                             technology to provide our clients. Our team has 
                             launched Standard Operating Environments for 
                             business of all sizes 
                         </p>
                     </div>
                     <div className="flip-card-back1">
                         <img src={back} className="back1" />
                      </div>
                 </div>
                 
            </div>
        
            <div className="flip-card1">
                <div className="flip-card-inner1">
                    <div className="flip-card-front1">
                         <img src={customapp} className="consulting" />
                         <h4>Custom Apps </h4>
                         <p>Engage our team of dedicated professionals to 
                             design and develop customized solutions to 
                             meet your needs.
                         </p>
                     </div>
                     <div className="flip-card-back1">
                         <img src={back} className="back1" />
                      </div>
                 </div>
            </div>
        </div>
        <div className="bottom-flipcard">
            <div className="flip-card1">
                <div className="flip-card-inner1">
                    <div className="flip-card-front1">
                         <img src={implementation} className="consulting" />
                         <h4>Implementation</h4>
                         <p>Whether you choose to have Software in the cloud or 
                            on-premise, our team will ensure your 
                            implementation goes smoothly.
                         </p>
                     </div>
                     <div className="flip-card-back1">
                         <img src={back} className="back1" />
                      </div>
                 </div>
            </div>
            <div className="flip-card1">
                <div className="flip-card-inner1">
                    <div className="flip-card-front1">
                         <img src={manhosting} className="consulting" />
                         <h4>Managed Hosting</h4>
                         <p>Our highly skilled IT team can deploy, maintain, 
                            and manage your Odoo instance 
                            in the cloud or at your location 
                         </p>
                     </div>
                     <div className="flip-card-back1">
                         <img src={back} className="back1" />
                      </div>
                 </div>
            </div>
        </div> 
     </div>
    
    )
}

export default Section4