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
import bigimage  from  '../../assets/big.jpeg';
import small from '../../assets/rhino.jpeg';

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
            {/* hero */}
            <section className="body">
                <div className="video">
                    <video className="background-video" autoPlay loop muted>
                        <source src={backgroundVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="video-overlay">
                        <p><i>Discover The charm of unexplored destinations</i></p>
                    </div>
                </div>
            </section>
            <section className='icons'>
                <div className="big">
                    <img src={bigimage} alt='big' className='background_image'/>
                        <img src={small} alt="small" className='overlay_image'/>                    
                </div>
            </section>
            <section className='Testimonies'>
                <div className='person'>
                    <h1>Jonathan Muiruri</h1>
                    <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Culpa dolorem sunt voluptatibus autem minima pariatur perferendis id. 
                        Dolores totam eveniet suscipit quos quae! Accusamus tenetur assumenda eum, quasi inventore rem!</p1>
                </div>

                <div className='person'>
                    <h1>Prudence Wanjiku</h1>
                    <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Culpa dolorem sunt voluptatibus autem minima pariatur perferendis id. 
                        Dolores totam eveniet suscipit quos quae! Accusamus tenetur assumenda eum,
                         quasi inventore rem!</p1>
                         </div>

                         <div className='person'>
                    <h1>Hazael Mungai</h1>
                    <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Culpa dolorem sunt voluptatibus autem minima pariatur perferendis id. 
                        Dolores totam eveniet suscipit quos quae! Accusamus tenetur assumenda eum, quasi inventore rem!</p1>
                </div>
                
            </section>
        </>
    );
}

export default Header;
