import React from 'react';
import "./Home.css";
import SliderComponent from '../Slider/Slider';

function Home() {
  const slides = [
    'https://hips.hearstapps.com/hmg-prod/images/elle-loves-beige-chanel-chance-social-64f775e233b4c.jpg',
    'https://i.pinimg.com/originals/16/95/e7/1695e79ec2a8d7eb137edbfbf64ccf3c.jpg',
    'https://div6procdn.shopdutyfree.com/media/dufry/brands/Gabrielle-Chanel-BB-Banner-02-20_6.jpg',
  ];
  
  return (
    <div className="container">
      <div className="home-page">
        <div className="bg-image">
          <div className="overlay-text">
            <h1>WELCOME TO CHANEL</h1>
          </div>
        </div>
        <div className="text-between-slides">
          <p>Founded by Gabrielle Coco Chanel over a century ago, Chanel has become synonymous with sophistication and impeccable taste in the realms of fashion, perfume, and cosmetics.</p>
        </div>
        <SliderComponent slides={slides} />
      </div>
      <div className="info-section">
        <div className="info-block">
          <h2>Who We Are</h2>
          <p>Welcome to Nike Shop, your ultimate destination for trendy and high-quality sportswear. We are passionate about providing athletes and sports enthusiasts with top-notch products to enhance their performance and style.</p>
        </div>
        <div className="info-block">
          <h2>Our Mission</h2>
          <p>Our mission is to inspire and motivate individuals to reach their fitness goals by offering a wide range of athletic apparel, footwear, and accessories. We believe that everyone has the potential to push their limits and excel in their chosen sports.</p>
        </div>
        <div className="info-block">
          <h2>Our Values</h2>
          <p>At Nike Shop, we value innovation, quality, and customer satisfaction. We work closely with athletes, designers, and experts to create products that combine cutting-edge technology, comfort, and style. </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
