import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";

// Corrected import paths
import headerImage from '../../assets/header.png';
import navImage from '../../assets/nav.png';
import phoneIcon from '../../assets/phone.png';
import holidaysIcon from '../../assets/holidays.png';
import gmailIcon from '../../assets/gmail.png';
import backgroundVideo from '../../assets/home.mp4';

function Header() {
    return (
        <>
            {/* whole navigation bar */}
            <div className="Top">
                <section className="orange">
                    <p>ppppp</p>
                </section>
                <section className="topleft">
                    <img src={headerImage} alt="Header" />
                    <p>Exemplary <br />Tours</p>
                </section>
                <section className="header">
                    <p className="p1"><a href="/home">Home</a></p>
                    <p className="p1"><a href="/tours">Tours</a></p>
                    <p className="p1"><a href="/destination">Destinations</a></p>
                    <p className="p1"><a href="/contact us">Contact us</a></p>
                    <p className="p2">
                        <img src={phoneIcon} alt="Phone" /><a href="vee">+254743209259</a>
                    </p>
                </section>
                {/* nav bar */}
                <div className="nav">
                    <img src={navImage} alt="Nav" />
                    <div className="navhover">
                        <div className="navhover1">
                            <h1>Your gateway to unforgettable adventures and breathtaking destinations!</h1>
                            <p><i>Embark on a journey with us and discover the world like never before!</i></p>
                            <div className="navhovericons">
                                <img src={holidaysIcon} alt="Holidays" />
                                <p>Holidays</p>
                                <img src={phoneIcon} alt="Phone" />
                                <p>+254743209259</p>
                                <img src={gmailIcon} alt="Gmail" />
                                <p>njerivictory52@gmail.com</p>
                                <div className="navhoverlist">
                                    <ul className="navdestinations">
                                        <li>Mt. Kenya</li>
                                        <li>Mt. Ruwenzori</li>
                                        <li>Lake Nakuru</li>
                                        <li>Tsavo National Park</li>
                                        <li>Nairobi National Park</li>
                                        <li>Coastal Kenya</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* body */}
            <section className="body">
                <div className="video">                
                <video autoPlay muted loop className="background-video">
                    <source src={backgroundVideo} type="video/mp4" className='vid' />
                    <p><i>Discover The charm of unexplored destinations</i></p>
                </video>
            
                    
                </div>
                {/* testimonies */}
                <section className='testimonies'>
                    <div  className='T3'>
                    <div className="T1"> <h1>Jonathan Muiruri</h1> </div>
                    <div className='T2'><p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dicta facere laudantium, laborum tempora labore voluptatum amet odit 
                        explicabo suscipit accusantium autem quia, in aliquam, eaque nam possimus distinctio ducimus?</p1></div>
                      </div>

                        <div className='T3'>
                        <div className="T1"> <h1>Prudence Wanjiku</h1> </div>
                    <div className='T2'><p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dicta facere laudantium, laborum tempora labore voluptatum amet odit 
                        explicabo suscipit accusantium autem quia, in aliquam, eaque nam possimus distinctio ducimus?</p1></div>
                         </div>

                         <div className='T3'>
                        <div className="T1"> <h1>Hazael Mungai</h1> </div>
                    <div className='T2'><p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dicta facere laudantium, laborum tempora labore voluptatum amet odit 
                        explicabo suscipit accusantium autem quia, in aliquam, eaque nam possimus distinctio ducimus?</p1></div>
                       </div>
              </section>
            </section>
        </>
    );
}

export default Header;
