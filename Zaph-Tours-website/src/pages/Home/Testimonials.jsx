import scotfield from "../../assets/scotfield.jpeg" 
import nairobi from "../../assets/nairobi.jpeg"
import rio from "../../assets/rio.jpg"
import blindspot from "../../assets/blindspot.jpg"
import "./Testimonials.css"
function Testimonials() {
  return (
    <>
           <div className="testimonyheading">
            <h2>See what people are saying about Us</h2>
            </div>
    
    <div className="testimonies">
{/* ************************************************************8 */}
 
{/* ******************************************************************************* */}
        <div className="testimony">
        <section className="actualtesmimony">
            <img src={scotfield} alt="Testimony" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident aperiam dolores, in, veniam consequatur iste commodi similique facilis, hic quis doloremque esse velit eum consequuntur rerum architecto rem. Architecto, illo!</p>

            <div className="title">
                <h1>Michael scotfield</h1>
                <p></p>
            </div>

        </section>
        </div>
 {/* ******************************************************************************* */}

{/* ******************************************************************************* */}




<div className="testimony">
        <section className="actualtesmimony">
            <img src={nairobi} alt="Testimony" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident aperiam dolores, in, veniam consequatur iste commodi similique facilis, hic quis doloremque esse velit eum consequuntur rerum architecto rem. Architecto, illo!</p>

            <div className="title">
                <h1>Silene Oliveira</h1>
                <p></p>
            </div>

        </section>
        </div>
 {/* ******************************************************************************* */}





 <div className="testimony">
        <section className="actualtesmimony">
            <img src={rio} alt="Testimony" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident aperiam dolores, in, veniam consequatur iste commodi similique facilis, hic quis doloremque esse velit eum consequuntur rerum architecto rem. Architecto, illo!</p>

            <div className="title">
                <h1>Aníbal Cortés</h1>
                <p></p>
            </div>

        </section>
        </div>
 {/* ******************************************************************************* */}




 <div className="testimony">
        <section className="actualtesmimony">
            <img src={blindspot} alt="Testimony" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident aperiam dolores, in, veniam consequatur iste commodi similique facilis, hic quis doloremque esse velit eum consequuntur rerum architecto rem. Architecto, illo!</p>

            <div className="title">
                <h1>Patterson</h1>
                <p></p>
            </div>

        </section>
        </div>
 {/* ******************************************************************************* */}
    </div>

    </>

  )
}

export default Testimonials