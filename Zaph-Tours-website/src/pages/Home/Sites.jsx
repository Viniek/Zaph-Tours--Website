import React, { useState, useEffect } from 'react';
import "./Sites.css";
import mtkenya from '../../assets/mtkenya.jpg';
import mtkilimanjaro from '../../assets/mtkilimanjaro.jpg';
import lakenakuru from '../../assets/nakuru.jpg';
import coast from '../../assets/coast.jpg';
import tsavo from '../../assets/tsavo.jpg';
import nairobipark from '../../assets/nairobi park.jpg';

function Sites() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 6);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className='viewsites'>
        <section className='viewsites1'>
          <div className={`kenya ${currentSlide === 0 ? 'active' : ''}`}>
            <img src={mtkenya} alt="mountain" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio nihil quam deserunt veniam alias cum pariatur doloribus esse nulla, optio eos perspiciatis saepe cumque enim iure in, commodi eligendi.</p>
          </div>
          <div className={`kenya ${currentSlide === 1 ? 'active' : ''}`}>
            <img src={tsavo} alt="mountain" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio nihil quam deserunt veniam alias cum pariatur doloribus esse nulla, optio eos perspiciatis saepe cumque enim iure in, commodi eligendi.</p>
          </div>
          <div className={`kenya ${currentSlide === 2 ? 'active' : ''}`}>
            <img src={lakenakuru} alt="mountain" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio nihil quam deserunt veniam alias cum pariatur doloribus esse nulla, optio eos perspiciatis saepe cumque enim iure in, commodi eligendi.</p>
          </div>
          <div className={`kenya ${currentSlide === 3 ? 'active' : ''}`}>
            <img src={coast} alt="mountain" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio nihil quam deserunt veniam alias cum pariatur doloribus esse nulla, optio eos perspiciatis saepe cumque enim iure in, commodi eligendi.</p>
          </div>
          <div className={`kenya ${currentSlide === 4 ? 'active' : ''}`}>
            <img src={mtkilimanjaro} alt="mountain" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio nihil quam deserunt veniam alias cum pariatur doloribus esse nulla, optio eos perspiciatis saepe cumque enim iure in, commodi eligendi.</p>
          </div>
          <div className={`kenya ${currentSlide === 5 ? 'active' : ''}`}>
            <img src={nairobipark} alt="mountain" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio nihil quam deserunt veniam alias cum pariatur doloribus esse nulla, optio eos perspiciatis saepe cumque enim iure in, commodi eligendi.</p>
          </div>
        </section>
        <section className='form'>
        </section>
      </section>
    </>
  );
}

export default Sites;
