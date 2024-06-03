import React from 'react';
import ProductCategory from './ProductCategory'; // Путь к вашему компоненту категории продуктов
import "./Home.css";

function Home() {
  const categories = [
    {
      name: 'Dried fruits',
      products: [
        { id: 1, name: 'Dried apricots', image: 'https://i1.stat01.com/2/3752/137515038/afacdb/kuraga-quot-korolevskaya-quot-vysshij-sort.jpg', price: '108som' },
        { id: 2, name: 'Figs', image: 'https://firebasestorage.googleapis.com/v0/b/diplom-597c7.appspot.com/o/products%2F157bf8c7-130d-4ff7-a128-5d387d8fce3f.jpg?alt=media&token=31b0aea8-99d2-4675-bf61-42e807b08dc8', price: '148som' },
      ],
    },
    {
      name: 'Fruits',
      products: [
        { id: 3, name: 'Watermelon', image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/11/watermelon-1296x728-header-1.jpg?w=1155&h=1528', price: '212som' },
        { id: 4, name: 'Mandarin', image: 'https://soap-formula.ru/assets/images/products/261/532x315/mandarin.jpg', price: '40 som' },
      ],
    },
    // Другие категории продуктов
  ];

  return (
    <div className="home-page">
      <h1>Welcome to Markom Store!</h1>
      <div className="categories">
        {categories.map((category) => (
          <ProductCategory key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Home;
