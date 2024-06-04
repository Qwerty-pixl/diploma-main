import React from 'react';
import ProductCategory from './ProductCategory'; // Путь к вашему компоненту категории продуктов
import "./Home.css";

function Home() {
  const categories = [
    {
      name: ' For women',
      products: [
        { id: 1, name: 'Chanel 5', img: 'https://aura-cosmetics.kg/wp-content/uploads/2020/10/CHANEL-%E2%84%965-100ml.jpg', price: '108som' },
        { id: 2, name: 'Red', img: 'https://fraguru.com/mdimg/perfume/375x500.51422.jpg', price: '148som' },
      ],
    },
    {
      name: 'For men',
      products: [
        { id: 3, name: 'Bleu De Chanel', img: 'https://aura-cosmetics.kg/wp-content/uploads/2020/10/%D0%A2%D1%83%D0%B0%D0%BB%D0%B5%D1%82%D0%BD%D0%B0%D1%8F-%D0%B2%D0%BE%D0%B4%D0%B0-BLEU-DE-CHANEL.jpg', price: '212som' },
        { id: 4, name: 'Colognes', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR4v_a1toexE9inBtrX_yZutVWOh6rB-Tdrw&s', price: '40 som' },
      ],
    },
    // Другие категории продуктов
  ];

  return (
    <div className="home-page">
      <h1> OUR PERFUMES FOR ALL </h1>
      <div className="categories">
        {categories.map((category) => (
          <ProductCategory key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Home;
