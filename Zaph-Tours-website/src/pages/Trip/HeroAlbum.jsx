import './Trip.css';
import honeymoon1 from  '../../assets/honeymoon1.jpeg';
import honeymoon2 from '../../assets/honeymoon2.jpeg';
import honeymoon3 from '../../assets/honeymoon3.webp'
import family1 from '../../assets/family1.jpeg';
import family2 from '../../assets/family2.jpeg';
import family3 from '../../assets/family3.jpeg';
import adventure1 from '../../assets/adventure1.jpeg';
import adventure2 from '../../assets/adventure2.jpeg';
 import adventure3 from '../../assets/adventure3.jpeg';
 import cultural1 from '../../assets/cultural1.jpeg';
 import cultural2 from '../../assets/cultural2.webp';
 import cultural3 from '../../assets/cultural1.jpeg';

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
{/* album1 */}
<div className='album1'>
    <img src={adventure1} alt="adventure"/>
    <p className='hmtext'>Unleash your inner explorer with our thrilling adventure package. Perfect for adrenaline seekers and nature lovers alike, our adventures take you to the heart of the action. Experience the excitement of pushing your limits in breathtaking destinations</p>
</div>
{/* album2 */}
<div className='album2'>
    <img src={adventure2} alt="adventure"/>
    <p className='hmtext'>From the rugged mountains of Patagonia to the dense jungles of Costa Rica, our adventure package offers a variety of challenging and awe-inspiring locations. Each destination is carefully selected to provide unique and unforgettable experiences for true adventurers.</p>
</div>
{/* album1 */}
<div className='album1'>
    <img src={adventure3} alt="adventure"/>
    <p className='hmtext'>Take part in exhilarating activities like white-water rafting, mountain climbing, and wildlife safaris. Our adventure package includes expert guides, top-notch equipment, and all the support you need to conquer new heights. Embark on the adventure of a lifetime and create stories worth telling.</p>
</div>
</section>

{/* cultural*/}
<section className="adventure">
{/* album2 */}
<div className='album2'>
    <img src={cultural1} alt="cultural"/>
    <p className='hmtext'>Immerse yourself in the rich tapestry of global cultures with our exclusive cultural tours. Perfect for those who seek to understand and appreciate the world's diverse traditions, our tours offer deep dives into the heart of local customs and heritage. Experience the beauty of cultural exchange and connection</p>
</div>
{/* album1 */}
<div className='album1'>
    <img src={cultural2} alt="cultural"/>
    <p className='hmtext'>From the ancient temples of Japan to the vibrant markets of Morocco, our cultural tours take you to iconic and lesser-known destinations brimming with history and tradition. Each location is chosen to provide an authentic and enriching cultural experience, allowing you to see the world through a new lens.</p>
</div>
{/* album2 */}
<div className='album2'>
    <img src={cultural3} alt="culture"/>
    <p className='hmtext'>Engage with local communities, participate in traditional ceremonies, and savor authentic cuisine on our meticulously curated cultural tours. Our package includes knowledgeable guides, immersive activities, and behind-the-scenes access that bring each culture to life. Discover the stories and traditions that shape our world</p>
</div>
</section>
    </section>
  )
}

export default HeroAlbum
