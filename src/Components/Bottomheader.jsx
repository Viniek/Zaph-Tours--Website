import { Link } from "react-router-dom";
import './Header.css';
import headerImage from '../assets/header.png';
import navImage from '../assets/nav.png';
import phoneIcon from '../assets/phone.png';
import holidaysIcon from '../assets/holidays.png';
import gmailIcon from '../assets/gmail.png';

function Bottomheader() {
    return (
        <>
            <div className="Top">
                <section className="orange">
                    <p>ppppp</p>
                </section>
                <section className="topleft">
                    <img src={headerImage} alt="Header" />
                    <p>Exemplary <br />Tours</p>
                </section>
                <nav className="header">
                    <ul className="nav_list">
                        <li className="p1">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="p1">
                            <Link to="/Destination">Destinations</Link>
                        </li>
                        <li className="p1">
                            <Link to="/Trip">Our Trips</Link>
                        </li>
                        <li className="p1">
                            <Link to="/Contact">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <p className="p2">
                        <img src={phoneIcon} alt="Phone" />
                        <a href="vee">+254743209259</a>
                    </p>
                </div>
                <div className="nav">
                    <img src={navImage} alt="Nav" />
                    
                                </div>
                            </div>
                        
                    
            
            
        </>
    );
}

export default Bottomheader;
