import "./Header.css";

import { Link } from "react-router-dom";
function Header(){
return(
<>
{/* navigation bar */}
<div className="Top">    
    <section className="orange">
        <p>ppppp</p>
    </section> 
    <section className="topleft">
        <img src="./src/assets/header.png"></img>
        <p>Exemplary <br/>Tours</p>
    </section>
    <section className="header">
    <p className="p1"><a href="/home">Home</a></p> 
     <p className="p1"><a href="tours">Tours</a></p>
    <p className="p1"><a href="destination">Destinations</a></p>
    <p className="p1"><a href="contact us">Contact us</a></p>
    <p className="p2">
    <img src="./src/assets/phone.png"/><a href="vee">+254743209259</a></p> 
    </section>
    {/* nav bar */}
    <div className="nav">
        <img src="./src/assets/nav.png"/>
        <div className="navhover">
            <div className="navhover1">
            <h1>Your gateway to unforgettable adventures and breathtaking destinations!</h1>
            <p>Embark on a journey with us and discover the world like never before!</p>
            <div className="navhovericons">
                <img src="./src/assets/holidays.png"/>
                <p>Holidays</p>
                <img src="./src/assets/phone.png"/>
                <p>+254743209259</p>
                <img src="./src/assets/gmail.png"/>
                <p>njerivictory52@gmail.com</p>
                <div className="navhoverlist">
                    <ul className="navdestinations">
                        <li>Mt. Kenya</li>
                        <li>Mt. Ruwenzori</li>
                        <li>Lake Nakuru</li>
                        <li>Tsavo National Park</li>
                        <li>Nairobi national park</li>
                        <li> Coastal Kenya</li>
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
        <p><i>Discover The charm of unexplored destinations</i></p>
    </div>
</section>
</>
)
}
export default Header;