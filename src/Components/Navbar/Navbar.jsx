import React, { useContext, useState } from "react";
import "./Navbar.css";

import logo from "../Assets/l.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {

   const [menu, setMenu] = useState('shop')
   const { getTotalCartItems } = useContext(ShopContext)

   return (
      <div className="navbar">
         <Link to='/' style={{ textDecoration: 'none' }}>
            <div className="nav-logo">
               <img src={logo} alt="" />
               <p>Dino Shop</p>
            </div>
         </Link>
         <ul className="nav-menu">
            <li onClick={() => { setMenu('shop') }}>
               <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Shop</Link>{menu === 'shop' ? <hr /> : <></>}
            </li>
            <li onClick={() => { setMenu('dogs') }}>
               <Link to='/dogs' style={{ textDecoration: 'none', color: 'black' }}>Dog</Link>{menu === 'dogs' ? <hr /> : <></>}
            </li>
            <li onClick={() => { setMenu('cats') }}>
               <Link to='/cats' style={{ textDecoration: 'none', color: 'black' }}>Cat</Link>{menu === 'cats' ? <hr /> : <></>}
            </li>
            <li onClick={() => { setMenu('accessories') }}>
               <Link to='/accessories' style={{ textDecoration: 'none', color: 'black' }}>Kitty & Puppy</Link>{menu === 'accessories' ? <hr /> : <></>}
            </li>
         </ul>
         <div className="nav-login-cart">
            <Link to='/login'>
               <button>Login</button>
            </Link>
            <Link to='/cart'>
               <img src={cart_icon} alt="" />
            </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
         </div>
      </div>
   );
}

export default Navbar;
