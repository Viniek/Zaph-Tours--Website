import "./Contact.css"
import Details from "./Details";
function Contact(){
    return(
        <>
        <div className="contactussection">

            <section className="mapsection">
                <h1>Visit Us</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819658856533!2d36.81902107404565!3d-1.2819741856194862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d45af411ad%3A0x6123ae4b4551b201!2sBazaar%20Plaza%2C%20Moi%20Ave%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1717766274911!5m2!1sen!2ske" width="500" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>


            <div className="contactsection">
                
                <form>
                <div className="headingform"><h1>Reach out to us</h1></div>
                
                <div className="topinputs">
                    
                    <input type="text" placeholder="Full Name*"  required/>
                    <input type="email"  placeholder="Email Adress*" required/>
                </div>

                
                <div className="topinputs">
                    <input type="text"  placeholder="Phone Number*" required/>
                    <input type="text" placeholder="Subject*"  required/>
                    
                </div>

                <div>
                    <textarea  id="textarea" placeholder="Send us a message"></textarea>
                </div>

                <div>
                    <button type="button" className="buttonsubmit">Submit</button>
                </div>

                </form>
            </div>

            

        </div>
        <Details/>
        </>
    )
} export default Contact;