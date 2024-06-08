import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import me from "../../assets/me.svg"
import "./About.css"

export default function About() {
  return (
<>
        <div className='aboutcontainer'>

        <section className='aboutsection'>
           <h1 className="aboutheading">about us</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quia.</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis explicabo similique hic </p> 
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ad explicabo magnam ea.</p>

           <div className="favicon">
            <p className="faviconsitems">{<FaFacebook/>}</p>
            <p className="faviconsitems">{<FaInstagram/>}</p>
            <p className="faviconsitems">{<FaLinkedinIn/>}</p>
            <p className="faviconsitems">{<FaTwitter/>}</p>
           </div>

        </section>
      
        <div className='aboutimg'>
            <img src={me} alt="about us"/>
        </div>
        
        </div>
</>
  )
}
