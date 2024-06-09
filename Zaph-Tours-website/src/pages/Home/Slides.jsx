import React, { useState, useEffect } from 'react';
import "./Sites.css";
import mtkenya from '../../assets/mtkenya.jpg';
import mtkilimanjaro from '../../assets/mtkilimanjaro.jpg';
import lakenakuru from '../../assets/nakuru.jpg';
import coast from '../../assets/coast.jpg';
import tsavo from '../../assets/tsavo.jpg';
import nairobipark from '../../assets/nairobi park.jpg';

const slides = [
  { src: mtkenya, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio nihil quam deserunt veniam alias cum pariatur doloribus esse nulla, optio eos perspiciatis saepe cumque enim iure in, commodi eligendi." },
  { src: tsavo, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio nihil quam deserunt veniam alias cum pariatur doloribus esse nulla, optio eos perspiciatis saepe cumque enim iure in, commodi eligendi." },
  { src: lakenakuru, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio nihil quam deserunt veniam alias cum pariatur doloribus esse nulla, optio eos perspiciatis saepe cumque enim iure in, commodi eligendi." },
  { src: coast, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio nihil quam deserunt veniam alias cum pariatur doloribus esse nulla, optio eos perspiciatis saepe cumque enim iure in, commodi eligendi." },
  { src: mtkilimanjaro, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio nihil quam deserunt veniam alias cum pariatur doloribus esse nulla, optio eos perspiciatis saepe cumque enim iure in, commodi eligendi." },
  { src: nairobipark, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio nihil quam deserunt veniam alias cum pariatur doloribus esse nulla, optio eos perspiciatis saepe cumque enim iure in, commodi eligendi." },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='slideshow'>
      <div className='kenya'>
        <img src={slides[currentSlide].src} alt={`Slide ${currentSlide + 1}`} />
        <p>{slides[currentSlide].text}</p>
      </div>
    </div>
  );
};

function Sites() {
  return (
    <>
      <section className='viewsites'>
        <section className='viewsites1'>
          <Slideshow />
        </section>
        <section className='viewsites2'>
          <Slideshow />
        </section>
        <section className='form'></section>
      </section>
    </>
  );
}

export default Sites;
