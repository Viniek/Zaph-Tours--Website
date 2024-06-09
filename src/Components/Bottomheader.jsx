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
        </>
    );
}

export default Bottomheader;
