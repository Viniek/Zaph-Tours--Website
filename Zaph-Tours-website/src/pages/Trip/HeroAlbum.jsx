import './Trip.css';
import honeymoon1 from  '../../assets/honeymoon1.jpeg';
import honeymoon2 from '../../assets/honeymoon2.jpeg';
import honeymoon3 from '../../assets/honeymoon3.webp'


function HeroAlbum() {
  return (
    <section className='album'>
<div className='album1'>
    <img src={honeymoon1} alt="honeymoon"/>
    <p className='hmtext'>Embark on the journey of a lifetime with our exclusive honeymoon package. Celebrate your love in stunning destinations where
         every moment is designed to delight. Let us make your honeymoon the fairy tale you've always dreamed of.</p>
</div>
{/* album2 */}
<div className='album2'>
    <img src={honeymoon2} alt="honeymoon"/>
    <p className='hmtext'>"From the sun-kissed beaches of the Maldives to the romantic streets of Paris, our
         honeymoon package offers unparalleled experiences. Choose from a variety of breathtaking locations that 
         promise to create unforgettable memories.Every destination is handpicked to ensure a magical getaway."</p>
</div>
{/* album 1 */}
<div className='album1'>
    <img src={honeymoon3} alt="honeymoon"/>
    <p className='hmtext'>Indulge in luxurious accommodations, intimate dinners, and exciting adventures tailored 
        just for you. Our honeymoon package includes bespoke services that cater to your every desire. 
        Relax and relish in a seamless, stress-free romantic escape.</p>
</div>
    </section>
  )
}

export default HeroAlbum
