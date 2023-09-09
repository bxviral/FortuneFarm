import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";

import Weather from "./components/weather";
import Adminlogin from "./components/Adminlogin";
import EditProduct from "./components/EditProduct";
import EditShopkeeper from "./components/EditShopkeeper";
import "./index.css";
import Adminpage from "./components/Adminpage";
import ShopKeeperDetails from "./components/ShopKeeperDetails";
import ShopKeeperLogin from "./components/ShopKeeperLogin";
import AddProduct from "./components/AddProduct";
import Shopkeeperpage from "./components/Shopkeeperpage";
import Shopkeeperdisplay from "./components/Shopkeeperdisplay";
import StoreLogin from "./components/StoreLogin/StoreLogin";
import StoreSignUp from "./components/StoreSignUp/StoreSignUp";
import ShopsNearMe from "./components/ShopsNearMe/ShopsNearMe";
import ShopOnline from "./components/ShopOnline/ShopOnline";
import Cart from "./components/cart";
import CartItems from "./components/cartItems";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />

          <Route exact path="/weather" element={<Weather></Weather>} />
          <Route exact path="/contact" element={<Contact></Contact>} />
          <Route exact path="/about" element={<About></About>} />
          <Route exact path="/Adminlogin" element={<Adminlogin />} />
          <Route exact path="/Adminpage" element={<Adminpage />} />
          <Route
            exact
            path="/ShopKeeperDetails"
            element={<ShopKeeperDetails />}
          />
          <Route exact path="/EditProduct" element={<EditProduct />} />
          <Route exact path="/EditShopkeeper" element={<EditShopkeeper />} />

          <Route exact path="/ShopKeeperLogin" element={<ShopKeeperLogin />} />
          <Route exact path="/AddProduct" element={<AddProduct />} />
          <Route exact path="/Shopkeeperpage" element={<Shopkeeperpage />} />
          <Route
            exact
            path="/Shopkeeperdisplay"
            element={<Shopkeeperdisplay />}
          />
          <Route exact path="/storeLogin" element={<StoreLogin></StoreLogin>} />
          <Route
            exact
            path="/storeSignUp"
            element={<StoreSignUp></StoreSignUp>}
          />
          <Route
            exact
            path="/nearShops"
            element={<ShopsNearMe></ShopsNearMe>}
          />
          <Route exact path="/cart" element={<Cart></Cart>} />
          <Route exact path="/cartItems" element={<CartItems></CartItems>} />
          <Route exact path="/shopOnline" element={<ShopOnline></ShopOnline>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
