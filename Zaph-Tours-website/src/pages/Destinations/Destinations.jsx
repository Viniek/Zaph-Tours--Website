import "./Destination.css";
import mtkenya from '../../assets/mtkenya.jpg';
import mtkilimanjaro from '../../assets/mtkilimanjaro.jpg';
import lakenakuru from '../../assets/nakuru.jpg';
import coast from '../../assets/coast.jpg';
import tsavo from '../../assets/tsavo.jpg';
import nairobipark from '../../assets/nairobi park.jpg';
import { Link } from "react-router-dom";


function Destination(){
    return(
        <>
        <section className="destinations">
            {/* section */}
            <div className="destination1">
                {/* 1 */}
                <div className="tsavo">
                    <div className="tsavocontent">
                    <img src={mtkenya}alt="mountain"/>
                    <p>Explore the breathtaking beauty of Mount Kenya! Embark on an unforgettable hiking adventure, 
                        experience diverse wildlife, stunning landscapes, and thrilling trails. Join us for a
                         once-in-a-lifetime journey!<br/>$20 per group<br/> $10per head<br/> 
                         <Link to="https://github.com/Viniek">Mt.Kenya</Link></p></div>
                         
                          <div className="tsavofooter"><h1>Mt.Kenya</h1></div>
                </div>
                {/* 2 */}
                <div className="tsavo">
                <div className="tsavocontent">
                    <img src={mtkilimanjaro}alt="mountain"/>
                    <p>Discover the enchanting Ruwenzori Mountains! Hike through lush forests, marvel at glacial peaks, 
                        and encounter unique wildlife. Join us for an extraordinary adventure in this mystical African
                         paradise!.<br/>$20 per group<br/> $10per head</p></div>
                          <Link to="https://github.com/Viniek">Mt.Kilimanjaro</Link>
                          <h1>Mt.Kilimanjaro</h1>
                </div>
                {/* 3 */}
                <div className="tsavo">
                <div className="tsavocontent">
                    <img src={lakenakuru}alt="lake"/>
                    <p>Experience the natural wonders of Lake Nakuru! Hike amidst stunning landscapes, vibrant flamingos, 
                        and diverse wildlife. Join us for an unforgettable adventure in this breathtaking Kenyan 
                        gem!<br/>$20 per group<br/> $10per head</p></div>
                          <Link to="https://github.com/Viniek">Lake Nakuru</Link>
                          <h1>Lake Nakuru</h1>
                </div>
         
            </div>
            <div className="destination2">
                       {/* 4 */}
                       <div className="tsavo">
                       <div className="tsavocontent">
                    <img src={coast}alt="coast"/>
                    <p>
                    Explore the stunning Kenyan coast! Hike along pristine beaches, lush forests, and historic sites. 
                    Immerse yourself in breathtaking scenery and vibrant culture. Join us for an unforgettable coastal 
                    adventure!.<br/>$20 per group<br/> $10per head</p></div>
                          <Link to="https://github.com/Viniek">Coast</Link>
                          <h1>Coast</h1>
                </div>
                {/* 5 */}
                <div className="tsavo">
                <div className="tsavocontent">
                    <img src={tsavo}alt="mountain"/>
                    <p>
                    Discover the wild beauty of Tsavo! Hike through vast savannas, encounter majestic wildlife, and 
                    explore rugged landscapes. Join us for an exhilarating adventure in Kenya's largest 
                    national park!.<br/>$20 per group<br/> $10per head</p></div>
                          <Link to="https://github.com/Viniek">Tsavo</Link>
                          <h1>Tsavo</h1>
                </div>
                {/* 6 */}
                <div className="tsavo">
                <div className="tsavocontent">
                    <img src={nairobipark}alt="park"/>
                    <p>Experience the unique charm of Nairobi National Park! Hike through scenic landscapes, 
                        spot diverse wildlife, and enjoy stunning city views. Join us for an unforgettable 
                        adventure right in Nairobi's backyard!.<br/>$20 per group<br/> $10per head</p></div>
                          <Link to="https://github.com/Viniek">Narobi National Park</Link>
                          <h1>Nairobi National Park</h1>
                </div>
            </div>
        </section>
        </>
    )
}
export default Destination;