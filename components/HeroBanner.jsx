import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className="hero-banner-content">
        <div className="hero-banner-text">
          <p className="beats-solo">{heroBanner.smallText}</p>
          <h3>{heroBanner.midText}</h3>
          <h1>{heroBanner.largeText1}</h1>
          
          <div className="hero-banner-buttons">
            <Link href={`/product/${heroBanner.product}`}>
              <button type="button">{heroBanner.buttonText}</button>
            </Link>
            <div className="desc">
              <h5>Description</h5>
              <p>{heroBanner.desc}</p>
            </div>
          </div>
        </div>
        
        <div className="hero-banner-image-container">
          <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />
        </div>
      </div>
    </div>
  )
}

export default HeroBanner