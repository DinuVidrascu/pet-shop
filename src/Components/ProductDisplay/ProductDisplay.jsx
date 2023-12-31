import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';


function ProductDisplay(props) {
   const { product } = props
   const {addToCart} = useContext(ShopContext);
   return (
      <div className='productdisplay'>
         <div className="productdisplay-left">
            <div className="productdisplay-img">
               <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
         </div>
         <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
               <img src={star_icon} alt="" />
               <img src={star_icon} alt="" />
               <img src={star_icon} alt="" />
               <img src={star_icon} alt="" />
               <img src={star_dull_icon} alt="" />
               <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
               <div className="productdisplay-right-price-old">${product.old_price}</div>
               <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem omnis quo quod, perferendis,
               cum fugit culpa dolorem enim ipsam possimus, ipsum dolores qui expedita labore!
            </div>
            <div className="productdisplay-right-size">
               <h1>Select weight</h1>
               <div className="productdisplay-right-sizes">
                  <div>900g</div>
                  <div>2kg</div>
                  <div>5kg</div>
                  <div>10kg</div>
                  <div>14kg</div>
               </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span> Dry food</p>
            <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest</p>
         </div>
      </div>
   )
}

export default ProductDisplay