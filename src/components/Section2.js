import react from "react";
import manual from '../Manual.png'
import mrk from '../mrk.png'
import accountspay from '../accontspay.png'
import essentialr from '../essentialr.png'

const Section2 = () => { 
    return(
            <div className="solution-container">
                 <h1>We Will Provide The Right Solution For You</h1>
                        <div className="Navigation-wrapper">
                          <div className="nav-list">
                              
                                  <a className="automation" href="#">Automation</a>
                                  <a className="payment" href="#">Electronic Record Management System</a>
                                  <a className="record" href="#">Payment Processing System</a>
                                  <a className="idms">Integerated Database System</a>
                              
                          </div>
                        </div>
                    <div className="img-container">
                        <div className="img-solution">
                              <img src={manual} className="manual" />
                        </div>
                        <div className="text-content">
                            <h1>Automation</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and
                                 typesetting industry. Lorem Ipsum has been the industry's 
                                 standard dummy text ever since the 1500s, when an unknown 
                                 printer took a galley of type and scrambled it to make a 
                                 type specimen book. It has survived not only five centuries, 
                                 but also the leap into electronic typesetting, remaining 
                                 essentially unchanged. 
                            </p>
                            <button className="btn-automation">Learn More </button>
                        </div>
                    </div>
            </div>
    )
}
export default Section2