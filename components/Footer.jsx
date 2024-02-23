import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>EST 2022 <br/> Made in Brooklyn </p>
      <p className="icons">
        <AiFillInstagram />
        {/* <AiOutlineTwitter /> */}
      </p>
    </div>
  )
}

export default Footer