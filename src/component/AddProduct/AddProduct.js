import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { productsCollection, uploadProductPhoto } from "../../firebase";
import { addDoc } from "firebase/firestore";
import "./AddProduct.css";

export default function AddProduct({ category }) {
  const { user } = useContext(AppContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState(null);
  const [description, setDescription] = useState("");

  if (!user || !user.isAdmin) {
    return null;
  }

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangePrice(event) {
    setPrice(event.target.value);
  }

  function onChangePicture(event) {
    const file = event.target.files[0];
    setPicture(file);
  }
  
  function onChangeDescription(event) {
    setDescription(event.target.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();

    if (!picture) {
      alert("Пожалуйста, загрузите изображение");
      return;
    }

    // Вы можете добавить дополнительную проверку типа файла здесь, если необходимо

    uploadProductPhoto(picture)
      .then((pictureUrl) =>
        addDoc(productsCollection, {
          category: category.id,
          name: name,
          price: Number(price),
          picture: pictureUrl,
          description: description,
          slug: name.replaceAll(" ", "-").toLowerCase(),
        })
      )
      .then(() => {
        setName("");
        setPrice("");
        setPicture(null);
        setDescription("");
        alert("Продукт успешно добавлен!");
      })
      .catch((error) => {
        console.error("Ошибка при добавлении продукта:", error);
        alert("Не удалось добавить продукт. Пожалуйста, попробуйте позже.");
      });
  }

  return (
    <div className="AddProduct">
      <form onSubmit={onFormSubmit}>
        <h3>Добавить новый продукт</h3>
        <div className="form-group">
          <label htmlFor="name">Название:</label>
          <input
            type="text"
            id="name"
            value={name}
            name="name"
            onChange={onChangeName}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Цена:</label>
          <input
            type="number"
            id="price"
            value={price}
            name="price"
            onChange={onChangePrice}
            min={0}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Описание:</label>
          <input
            type="text"
            id="description"
            value={description}
            name="description"
            onChange={onChangeDescription}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="picture">Изображение:</label>
          <input
            type="file"
            id="file"
            name="img"
            onChange={onChangePicture}
            required
          />
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
