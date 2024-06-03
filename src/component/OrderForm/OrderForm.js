import React from 'react';
import { useNavigate } from 'react-router-dom'; // Подключаем useNavigate
import './OrderForm.css'; // Подключаем CSS-стили для формы

function OrderForm() {
  const navigate = useNavigate(); // Получаем функцию навигации

  // Функция, которая будет вызываться при отправке формы
  const handleSubmit = (event) => {
    event.preventDefault(); // Отменяем стандартное поведение отправки формы
    // Здесь вы можете добавить логику для отправки данных формы

    // Через 5 секунд перенаправляем пользователя на страницу home
    setTimeout(() => {
      navigate('/thank-you');
    }, 5000);
  };

  return (
    <form className="decor" onSubmit={handleSubmit}>
      <div className="order-form-left-decoration"></div>
      <div className="order-form-right-decoration"></div>
      <div className="circle"></div>
      <div className="order-form-inner">
        <h3>Order</h3>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Address..." rows="3"></textarea>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default OrderForm;
