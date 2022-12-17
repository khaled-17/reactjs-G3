import React from 'react';
import  './prod.css'
 
const ProductSlider = () => {
 






    return (
    <>
<div class = "card-wrapper">
  <div class = "card">
     <div class = "product-imgs">
      <div class = "img-display">
        <div class = "img-showcase">
          <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt = "shoe image"/>
          <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt = "shoe image"/>
          <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt = "shoe image"/>
          <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt = "shoe image"/>
        </div>
      </div>
      <div class = "img-select">
        <div class = "img-item">
          <a href = "#" data-id = "1">
            <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt = "shoe image"/>
          </a>
        </div>
        <div class = "img-item">
          <a href = "#" data-id = "2">
            <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt = "shoe image"/>
          </a>
        </div>
        <div class = "img-item">
          <a href = "#" data-id = "3">
            <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt = "shoe image"/>
          </a>
        </div>
        <div class = "img-item">
          <a href = "#" data-id = "4">
            <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt = "shoe image"/>
          </a>
        </div>
      </div>
    </div>
     
  </div>
</div>




    </>
    );
}

export default ProductSlider;
