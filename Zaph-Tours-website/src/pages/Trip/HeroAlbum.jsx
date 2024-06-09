import './Trip.css';
import honeymoon1 from  '../../assets/honeymoon1.jpeg';
import honeymoon2 from '../../assets/honeymoon2.jpeg';
import honeymoon3 from '../../assets/honeymoon3.webp'
import family1 from '../../assets/family1.jpeg';
import family2 from '../../assets/family2.jpeg';
import family3 from '../../assets/family3.jpeg';
import adventure1 from '../../assets/adventure1.webp';
import adventure2 from '../../assets/adventure2.jpeg';
 import adventure3 from '../../assets/adventure3.jpeg';

function HeroAlbum() {
  return (
    <section className='album'>
        <section className='honeymoon'>
<div className='album1'>
    <img src={honeymoon1} alt="honeymoon"/>
    <p className='hmtext'>Embark on the journey of a lifetime with our exclusive honeymoon package. Celebrate your love in stunning destinations where
         every moment is designed to delight. Let us make your honeymoon the fairy tale you've always dreamed of.</p>
</div>
{/* album2 */}
<div className='album2'>
    <img src={honeymoon2} alt="honeymoon"/>
    <p className='hmtext'>From the sun-kissed beaches of the Maldives to the romantic streets of Paris, our
         honeymoon package offers unparalleled experiences. Choose from a variety of breathtaking locations that 
         promise to create unforgettable memories.Every destination is handpicked to ensure a magical getaway.</p>
</div>
{/* album 1 */}
<div className='album1'>
    <img src={honeymoon3} alt="honeymoon"/>
    <p className='hmtext'>Indulge in luxurious accommodations, intimate dinners, and exciting adventures tailored 
        just for you. Our honeymoon package includes bespoke services that cater to your every desire. 
        Relax and relish in a seamless, stress-free romantic escape.</p>
</div>
</section>

{/* family */}
<section className="family">
{/* album2 */}
<div className='album2'>
    <img src={family1} alt="family"/>
    <p className='hmtext'>Create lasting memories with our exciting family adventure package. 
        Designed for families of all sizes, our adventures promise fun, excitement, and bonding.
         Discover new destinations together and experience the joy of family travel like never before.</p>
</div>
{/* album1 */}
<div className='album1'>
    <img src={family2} alt="family"/>
    <p className='hmtext'>Explore a world of adventure with destinations that cater to all ages.
         From thrilling safari tours in Africa to captivating cultural experiences in Asia, 
         our family adventure package offers something for everyone. Every location is chosen to 
         ensure a safe and exhilarating journey..</p>
</div>
{/* album2 */}
<div className='album2'>
    <img src={family3} alt="family"/>
    <p className='hmtext'>Enjoy action-packed days filled with activities and evenings spent relaxing in family-friendly 
        accommodations. Our package includes guided tours, interactive experiences, and plenty of downtime for 
        everyone to recharge. Make every moment count with an adventure the whole family will love</p>
</div>
</section>


{/* adventure */}
<section className="adventure">
{/* album2 */}
<div className='album2'>
    <img src={adventure1} alt="adventure"/>
    <p className='hmtext'>Unleash your inner explorer with our thrilling adventure package. Perfect for adrenaline seekers and nature lovers alike, our adventures take you to the heart of the action. Experience the excitement of pushing your limits in breathtaking destinations</p>
</div>
{/* album1 */}
<div className='album1'>
    <img src={adventure2} alt="adventure"/>
    <p className='hmtext'>From the rugged mountains of Patagonia to the dense jungles of Costa Rica, our adventure package offers a variety of challenging and awe-inspiring locations. Each destination is carefully selected to provide unique and unforgettable experiences for true adventurers.</p>
</div>
{/* album2 */}
<div className='album2'>
    <img src={adventure3} alt="adventure"/>
    <p className='hmtext'>Take part in exhilarating activities like white-water rafting, mountain climbing, and wildlife safaris. Our adventure package includes expert guides, top-notch equipment, and all the support you need to conquer new heights. Embark on the adventure of a lifetime and create stories worth telling.</p>
</div>
</section>
    </section>
  )
}

export default HeroAlbum
