import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
   return (
      <div className='descriptionbox'>
         <div className="descriptionbox-navigator">
            <div className="description-nav-box">Description</div>
            <div className="description-nav-box fade">Reviews (122)</div>
         </div>
         <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Nihil eveniet, harum voluptatibus sapiente adipisci aperiam animi voluptates vitae ipsa ullam illo dolorum amet omnis,
               delectus eum tempora doloribus obcaecati exercitationem sit molestiae natus praesentium.
               Cumque ipsam praesentium provident deleniti,
               tempora quos nam eligendi laborum aliquam natus fugiat reiciendis, delectus voluptatum.</p>
            <p>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Perferendis voluptas laboriosam porro alias quaerat corporis,
               facere assumenda delectus aspernatur architecto,
               earum, aliquid minus illo totam?
            </p>
         </div>
      </div>
   )
}

export default DescriptionBox