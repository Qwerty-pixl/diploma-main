import { Route, Routes } from "react-router";
import Layout from "./component/Layout/Layout";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Category from "./component/pages/Category";
import Support from "./component/pages/Support";
import NotFound from "./component/pages/NotFound";
import { createContext, useEffect, useState } from "react";
import {
  onAuthChange,
  onCategoriesLoad,
  onOrdersLoad,
  onProductsLoad,
} from "./firebase";
import Product from "./component/pages/Product";
import Cart from "./component/pages/Cart";
import ThankYou from "./component/pages/ThankYou";
import Orders from "./component/pages/Orders";
import ProductCategory from "./component/pages/ProductCategory";

export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],
  // контекст для корзины
  cart: {}, // содержимое корзины
  setCart: () => {}, // изменить содержимое корзинки

  user: null,
});

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  const [user, setUser] = useState(null);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    onCategoriesLoad(setCategories);
    onProductsLoad(setProducts)
    onOrdersLoad(setOrders)

    onAuthChange((user) => {
      if (user) {
        user.isAdmin = user.email === "klaratokonova68@gmail.com";
      }

      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ categories, products, cart, setCart, user, orders }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/support" element={<Support />} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/productCategory" element={<ProductCategory />} />
            <Route path="/thank-you" element={<ThankYou />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
