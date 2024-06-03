import { useState } from "react";
import Auth from "../Auth/Auth";
import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Drawer from "../Drawer/Drawer";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import NavToggle from "../NavToggle/NavToggle";
import "./Layout.css";

export default function Layout(props) {

  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
        <ul>
          <NavToggle callback={toggleDrawer} />
          <Auth />
          <CartLink />
        </ul>
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
