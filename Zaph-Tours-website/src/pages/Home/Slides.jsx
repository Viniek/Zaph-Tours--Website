
import React, { useState, useEffect } from 'react';
import './Slides.css';
import park from "../../assets/park.jpg"
// import kenya from "../../assets/ kenya.jpg"
import flamingo from "../../assets/flamingo.jpg"
import kenyaa from "../../assets/kenyaa.jpg"
import ruwenzori from "../../assets/ruwenzori.jpeg"
import nai from "../../assets/nai.jpeg"
import india from "../../assets/india.jpeg"

const images = [
  
  // { url: kenya, content: 'Experience the breathtaking beauty and adventure of Mt. Kenya, where every step takes you closer to nature\'s majestic wonders' },
  { url: park, content: 'Explore the beatiful nature of Tsavo National park' },
  {url:flamingo, content:'Explore the beatiful nature of lake Nakuru'},
  {url:kenyaa, content:'Explore the beatiful nature of Mt. kenya'},
  {url:ruwenzori, content:'Explore the beatiful nature of Mt.Ruwenzori'},
  {url:nai, content:'Explore the beatiful nature of Nairobi National Park'},
  {url:india, content:'Explore the beatiful nature of Coastal region in kenya'},
  
];

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (

    <>

    <section className='exploresection'>

    <div className="slideshow">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image.url})` }}
        >
          <div className="content">
            {image.content}
          </div>
        </div>
      ))}
      <button className="nav-button prev" onClick={goToPrevSlide}>&lt;</button>
      <button className="nav-button next" onClick={goToNextSlide}>&gt;</button>
    </div>


    <div className='explore'>
      <h1>lorem5</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
    </section>

    </>
  );
};

export default Slides;
