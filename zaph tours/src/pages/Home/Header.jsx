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
            <h1>Your gateway to unforgettable adventures and breathtaking destinations!</h1>
            <p>Embark on a journey with us and discover the world like never before!</p>
            <div className="navhovericons">
                <img src="./src/assets/holidays.png"/>
                Holidays
                <img src="./src/assets/phone.png"/>
                +254743209259
                <img src="./src/assets/gmail.png"/>
                njerivictory52@gmail.com
            </div>
        </div>
    </div>
</div>
</>
)
}
export default Header;