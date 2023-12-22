import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import dog_banner from './Components/Assets/dog_b.png';
import cat_banner from './Components/Assets/cat_b.png'
import accessories_banner from './Components/Assets/kp_b.png'


function App() {
   return (
      <div>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path="/" element={<Shop />} />
               <Route path="/dogs" element={<ShopCategory banner={dog_banner} category="dog" />} />
               <Route path="/cats" element={<ShopCategory banner={cat_banner} category="cat" />} />
               <Route path="/accessories" element={<ShopCategory banner={accessories_banner} category="accessories" />} />
               <Route path="/product" element={<Product />}>
                  <Route path=":productId" element={<Product />} />
               </Route>
               <Route path="/cart" element={<Cart />} />
               <Route path="/login" element={<LoginSignup />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </div>
   );
}

export default App;
