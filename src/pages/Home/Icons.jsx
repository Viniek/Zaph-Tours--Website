import "./Icons.css"
import kenyaicon from '../../assets/mt.kenya.png'
import kilimanjaroicon from '../../assets/mt.kilimanjaro.png';
import nakuruicon from'../../assets/lake.png';
import tsavoicon from '../../assets/tsavo.png';
import nairobiicon from '../../assets/nairobi.png';
import coasticon from '../../assets/coast.png'

function Icons() {
  return (
<>

            {/* Icons */}
            <div className='icons'>
                <img src={kenyaicon}alt="mt.Kenya"/>
                <img src={nakuruicon}alt="nakuru"/>
                <img src={kilimanjaroicon}alt="mt.Kilimanjaro"/>                
                <img src={tsavoicon}alt="tsavo"/>
                <img src={coasticon}alt="coast"/>
                <img src={nairobiicon}alt="nairobi"/>      
               
            </div>
            <h1>DESTINATIONS</h1>
            </>
  )
}

export default Icons
