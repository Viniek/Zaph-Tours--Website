import './Herosection.css';
import backgroundVideo from '../../assets/home.mp4';


function Herosection() {
  return (
    <>
          {/* hero */}
    <section className="body">
    <div className="video">
        <video className="background-video" autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
            <p><i>Discover The charm of unexplored destinations</i></p>
        </div>
    </div>
</section>
    </>
  )
}

export default Herosection;
