import hero from "../../assets/hero.jpg"
import About from "./About";
import Slides from "./Slides";
import Testimonials from "./Testimonials";
import News from "./News";
import Hero from "./Hero";
import "./Home.css"
import Sites from "./Sites";
import Icons from "./Icons";
function Home(){
    return(
        <>
        <div className="welcomemessage">
        <h3>Welcome to Zaph Tours</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, consequatur?</p>
        </div>
        <Hero />
        <About/>      
        <Testimonials/>
        <Icons/> 
        <Sites />
               
               
        <News/>
        </>
    )
}
export default Home;