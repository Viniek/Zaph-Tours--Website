import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

import "./Details.css"
function Details({icon,details}) {
  return (

    <div className="oucontactsection">

    <section className="ourinfo">
    <p>{icon=<IoLocationSharp/>} {details="Bazaar plaza, Moi Avenue, Nairobi, Nairobi County"}</p>
    <p>{icon=<FaPhoneFlip/>} {details="+254768163608"}</p>
    <p>{icon=<CiClock2/>} {details="Open 8am-5pm Working Days"}</p>
    <p>{icon=<MdEmail/>} <Link to={details="josephkarimambugua@gmail.com"}>zaphtours.travels.com</Link></p>
    </section>


    <div className="oursocials">
        <h3>Follow us on</h3>
       <p> {icon=<FaInstagram/>} <Link to="https://github.com/Joseh254" target="blank">{details="Instagram"}</Link></p>
       <p>{icon=<FaFacebook/>} <Link to="https://github.com/Joseh254" target="blank">{details="Facebook"}</Link></p>
       <p>{icon=<FaLinkedinIn/>} <Link to="https://github.com/Joseh254" target="blank">{details="LinkedinIn"}</Link></p>
       <p>{icon=<FaTwitter/>} <Link to="https://github.com/Joseh254" target="blank">{details="Twitter"}</Link></p>
    </div>

    </div>
  )
}

export default Details