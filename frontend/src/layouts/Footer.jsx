import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from 'react-icons/fa';

const footerData = {
  branches: [
    { name: 'Mirpur', icon: FaMapMarkerAlt },
    { name: 'Farmgate', icon: FaMapMarkerAlt },
    { name: 'Badda', icon: FaMapMarkerAlt },
    { name: 'Aftabnagar', icon: FaMapMarkerAlt },
    { name: 'Uttara', icon: FaMapMarkerAlt },
  ],
  quickLinks: [
    { label: 'home', icon: AiOutlineArrowRight },
    { label: 'vehicles', icon: AiOutlineArrowRight },
    { label: 'services', icon: AiOutlineArrowRight },
    { label: 'featured', icon: AiOutlineArrowRight },
    { label: 'reviews', icon: AiOutlineArrowRight },
    { label: 'contact', icon: AiOutlineArrowRight },
  ],
  contactInfo: [
    { icon: FaPhone, value: '+123-456-7890' },
    { icon: FaPhone, value: '+111-222-3333' },
    { icon: FaEnvelope, value: 'bikebook@gmail.com' },
    { icon: FaMapMarkerAlt, value: 'Aftabnagar, Badda, Dhaka' },
  ],
  socialLinks: [
    { icon: FaFacebookF, label: 'facebook' },
    { icon: FaTwitter, label: 'twitter' },
    { icon: FaInstagram, label: 'instagram' },
    { icon: FaLinkedin, label: 'linkedin' },
    { icon: FaPinterest, label: 'pinterest' },
  ],
};

function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="box-container">
        {Object.entries(footerData).map(([sectionName, sectionItems], index) => (
          <div className="box" key={index}>
            <h3>{sectionName}</h3>
            {sectionItems.map((item, itemIndex) => (
              <a href="#" key={itemIndex}>
                {React.createElement(item.icon)}
                {item.value || item.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="credit"> Made with ❤️ | All rights reserved </div>
    </section>
  );
}

export default Footer;
