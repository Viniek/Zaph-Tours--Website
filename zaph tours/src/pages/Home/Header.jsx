import "./Header.css";

import { Link } from "react-router-dom";
function Header(){
return(
<>
{/* navigation bar */}
<div className="Top">
    {/* section orange */}
    <section className="orange">
        <p>ppppp</p>
    </section>
    {/* section topleft */}
    <section className="topleft">
        <img src="./src/assets/header.png"></img>
        <p>Exemplary <br/>Tours</p>
    </section>
    {/* section header */}
    <section className="header">
    <p className="p1"><a href="/home">Home</a></p> 
     <p className="p1"><a href="tours">Tours</a></p>
    <p className="p1"><a href="destination">Destinations</a></p>
    <p className="p1"><a href="contact us">Contact us</a></p>
    <p className="p2">Call Us today:<a href="vee">+254743209259</a></p> 
    </section>
</div>
</>
)
}
export default Header;