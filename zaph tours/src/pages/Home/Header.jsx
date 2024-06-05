import "./Header.css";

import { Link } from "react-router-dom";
function Header(){
return(
<>

<div className="Top">
    <section className="topleft">
        <p>Exemplary <br/>Tours</p>
    </section>
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