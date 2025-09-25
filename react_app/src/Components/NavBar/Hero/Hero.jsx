import React from 'react';
import profile from '../../../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      
      <img src={profile} alt="profile" />
      <h1><span>I'm Nivethithaa Saravanavel,</span> Frontend Developer</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum facilis similique cumque delectus!
        Atque, deleniti officia.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
