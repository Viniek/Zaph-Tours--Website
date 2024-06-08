import "./Contact.css"
import Details from "./Details";
function Contact(){
    return(
        <>
        <div className="contactussection">

            <section className="mapsection">
                <h1>Visit Us</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63835.21189445287!2d36.91150115809184!3d-0.4398688552723214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18285dfed09e0ebf%3A0x829716f702f65e9e!2sNyeri!5e0!3m2!1sen!2ske!4v1717883657581!5m2!1sen!2ske" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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