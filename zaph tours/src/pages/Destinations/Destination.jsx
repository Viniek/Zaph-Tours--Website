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
            <div className="destination1">
                {/* 1 */}
                <div className="tsavo">
                    <img src={mtkenya}alt="mountain"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem facilis obcaecati numquam fuga,
                         alias blanditiis nesciunt nisi consectetur in doloribus quisquam debitis nemo repudiandae perspiciatis voluptas
                          quam iusto autem.<br/>$20 per group<br/> $10per head</p>
                          <Link to="https://github.com/Viniek">Mt.Kenya</Link>
                          <h1>Mt.Kenya</h1>
                </div>
                {/* 2 */}
                <div className="tsavo">
                    <img src={mtkilimanjaro}alt="mountain"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem facilis obcaecati numquam fuga,
                         alias blanditiis nesciunt nisi consectetur in doloribus quisquam debitis nemo repudiandae perspiciatis voluptas
                          quam iusto autem.<br/>$20 per group<br/> $10per head</p>
                          <Link to="https://github.com/Viniek">Mt.Kilimanjaro</Link>
                          <h1>Mt.Kilimanjaro</h1>
                </div>
                {/* 3 */}
                <div className="tsavo">
                    <img src={lakenakuru}alt="lake"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem facilis obcaecati numquam fuga,
                         alias blanditiis nesciunt nisi consectetur in doloribus quisquam debitis nemo repudiandae perspiciatis voluptas
                          quam iusto autem.<br/>$20 per group<br/> $10per head</p>
                          <Link to="https://github.com/Viniek">Lake Nakuru</Link>
                          <h1>Lake Nakuru</h1>
                </div>
         
            </div>
            <div className="destination2">
                       {/* 4 */}
                       <div className="tsavo">
                    <img src={coast}alt="coast"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem facilis obcaecati numquam fuga,
                         alias blanditiis nesciunt nisi consectetur in doloribus quisquam debitis nemo repudiandae perspiciatis voluptas
                          quam iusto autem.<br/>$20 per group<br/> $10per head</p>
                          <Link to="https://github.com/Viniek">Coast</Link>
                          <h1>Coast</h1>
                </div>
                {/* 5 */}
                <div className="tsavo">
                    <img src={tsavo}alt="mountain"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem facilis obcaecati numquam fuga,
                         alias blanditiis nesciunt nisi consectetur in doloribus quisquam debitis nemo repudiandae perspiciatis voluptas
                          quam iusto autem.<br/>$20 per group<br/> $10per head</p>
                          <Link to="https://github.com/Viniek">Tsavo</Link>
                          <h1>Tsavo</h1>
                </div>
                {/* 6 */}
                <div className="tsavo">
                    <img src={nairobipark}alt="park"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem facilis obcaecati numquam fuga,
                         alias blanditiis nesciunt nisi consectetur in doloribus quisquam debitis nemo repudiandae perspiciatis voluptas
                          quam iusto autem.<br/>$20 per group<br/> $10per head</p>
                          <Link to="https://github.com/Viniek">Narobi National Park</Link>
                          <h1>Nairobi National Park</h1>
                </div>
            </div>
        </section>
        </>
    )
}
export default Destination;