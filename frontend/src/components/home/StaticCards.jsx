import React from 'react';
import Card from './components/Card';
import { FaHome, FaBiking, FaUsers, FaMotorcycle } from 'react-icons/fa';

function StaticCards() {
  const cardData = [
    { name: 'Branches', value: '150+', icon: FaHome },
    { name: 'Bikes Rented', value: '4770+', icon: FaBiking },
    { name: 'Happy Clients', value: '320+', icon: FaUsers },
    { name: 'Available Bikes', value: '1500+', icon: FaMotorcycle },
  ];

  return (
    <section className="icons-container">
      {cardData.map((card, index) => (
        <Card key={index} name={card.name} value={card.value} icon={card.icon} />
      ))}
    </section>
  );
}

export default StaticCards;
