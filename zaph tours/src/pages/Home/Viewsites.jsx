import './Viewsites.css';
import mtkenya from '../../assets/mtkenya.jpg';
import mtkilimanjaro from '../../assets/mtkilimanjaro.jpg';
import lakenakuru from '../../assets/nakuru.jpg';
import coast from '../../assets/coast.jpg';
import tsavo from '../../assets/tsavo.jpg';
import nairobipark from '../../assets/nairobi park.jpg';


function Viewsites() {
  return (
   <>
               {/* view sites */}
<section className='viewsites'>
{/* viewsites1 */}
 <section className='viewsites1'>   
{/* kenya1 */}
       <div className='kenya'>
<img src={mtkenya}alt="mountain"/>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio nihil quam 
    deserunt veniam alias cum pariatur doloribus esse nulla, optio eos perspiciatis saepe cumque 
    enim iure in, commodi eligendi.</p>
   </div>
{/* kenya2 */}
   <div className='kenya'>    
    <img src={tsavo}alt="mountain"/>
   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio nihil quam
     deserunt veniam alias cum pariatur doloribus esse nulla, optio eos perspiciatis saepe
      cumque enim iure in, commodi eligendi.</p>
   </div>
   {/* kenya3 */}
   <div className='kenya'>
   <img src={lakenakuru}alt="mountain"/>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio nihil quam 
    deserunt veniam alias cum pariatur doloribus esse nulla, optio eos perspiciatis saepe cumque 
    enim iure in, commodi eligendi.</p>
   </div>
</section>
{/* viewsite2 */}
<section className='viewsites2'>
    {/* kenya4 */}
   <div className='kenya'>
   <img src={coast}alt="mountain"/>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio nihil quam 
    deserunt veniam alias cum pariatur doloribus esse nulla, optio eos perspiciatis saepe cumque 
    enim iure in, commodi eligendi.</p>
   </div>
   {/* kenya5 */}
   <div className='kenya'>
   <img src={mtkilimanjaro}alt="mountain"/>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio nihil quam 
    deserunt veniam alias cum pariatur doloribus esse nulla, optio eos perspiciatis saepe cumque 
    enim iure in, commodi eligendi.</p>
   </div>
   {/* kenya6 */}
   <div className='kenya'>
   <img src={nairobipark}alt="mountain"/>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio nihil quam 
    deserunt veniam alias cum pariatur doloribus esse nulla, optio eos perspiciatis saepe cumque 
    enim iure in, commodi eligendi.</p>
   </div>
</section>

</section>
   </>
  )
}

export default Viewsites