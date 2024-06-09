import wave from '../assets/wave.png';
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer(){
    return(
<><div className='myfooter'>
<div className='copy'>
        <p>&copy;Zaph Tours  All Rights Reserved </p>
        <p>&copy;Viniek Companies</p>
        </div>

        <div className='footersocial'>

        <p>+254743209259</p>
        <Link to="https://github.com/Viniek">Facebook</Link>
        <Link to="https://github.com/Viniek">Twitter</Link>
        <Link to="https://github.com/Viniek">linkedin</Link>
        <Link to="https://github.com/Viniek">Instagram</Link>
        </div>
       
     </div>
  
        
        
        <img src={wave} alt="wave"/>
       
        </>
    )
}
export default Footer;