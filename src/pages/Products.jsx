import React from 'react'
import './Products.css'
import plane from '../assets/products/plane.jpg';
import poster_1 from '../assets/products/poster 1.png';
import poster_2 from '../assets/products/poster 2.png';
import ShopBanner from '../Components/ShopBanner';

const Products = () => {
  return (
   <div class = "products"> 
   <div class="product_container ">
    <p class="topic">Select Your Signature Look with Black Todd</p>

    <div class="plane_product">
        <div class="plane_product_pic">
        <img src="src/assets/products/pexels-tubarones-16049376.jpg"  class="plane_pic"/>
        </div>
        <div class="plane_product_pic">
        <img src="src/assets/products/pexels-tubarones-16052239.jpg"  class="plane_pic"/>
        </div>
        <div class="plane_product_pic">
        <img src="src/assets/products/pexels-tubarones-16049372.jpg"  class="plane_pic"/>
        </div>
    </div>
    
    <div className="center-container">
    <div class="plane_info">
          <span>Material: 100% Cotton</span><br></br>
          <span> Weight: 220 GSM</span><br></br>
          <span> Fit: Oversized</span><br></br>
          <span> Color: Black</span><br></br>
          <span> Available sizes: S   M   L</span>
          
          </div>
    </div>


    <hr class="h-row"></hr>
</div>
<div class="templates">
    <h1 >OUR OWN TEMPLATES</h1>

      <div class="product_grid">
        <div class="product_priview">
        <img src="src/assets/products/IMG_7261.png"  class="product_pic"/>
          <div class="product_info">
          <span>Fit: Oversized</span><br></br>
          <span> Color: Black</span><br></br>
          <span> Available sizes: S, M, L</span>
          
         </div>
        </div>
        
        <div class="product_priview">
           <div class="product_item">
            <img src="src/assets/products/IMG_7258.png"  class="product_pic"/>
            </div>
          <div class="product_info">
           
          <span>Fit: Oversized</span><br></br>
          <span> Color: Black</span><br></br>
          <span> Available sizes: S, M, L</span>
          
         </div>
        </div>
        <div class="product_priview">
           <div class="product_item">
           <img src="src/assets/products/IMG_7219.png"  class="product_pic"/>
            </div>
          <div class="product_info">
          <span> Fit: Oversized</span><br></br>
          <span> Color: Black</span><br></br>
          <span> Available sizes: S, M, L</span>
          
         </div>
        </div>

      </div>
      </div>

      <div class="row_photo">  

      <hr class="h-row"></hr>
      
      <div class="product_row">
      <div class="column big_pic1">
      <img src="src/assets/products/poster 2.png" class="product-bigpic" />
      </div>

      <div class="column big_pic1_info">
        <h2>WARNING: MAY CONTAIN ANGELS</h2>
      </div>
      </div>
      </div>
      <div class="product_row2">
      
      <div class=" big_pic_infcolumno2">
        <h2>WRAPE YOURSELF IN LOVE</h2>
      </div>
      <div class="column big_pic2">
      <img src="src/assets/products/6.png" class="product-bigpic2" />
      </div>
      </div>

      <div class="product_row">
      <div class="column big_pic3">
      <img src="src/assets/products/poster 1 -1.png" class="product-bigpic-3" />
      </div>

      <div class="column big_pic1_info">
        <h2>
        WRAP YOURSELF IN CONFIDENT
        </h2>
      </div>
      </div>
      <hr class="h-row"></hr>
    
     <div class="product_size_row">
      <img src="src/assets/products/size chart - oversized.png" class="product-size-chart" />
     
     </div>

     <hr class="h-row"></hr>
     
     
     <ShopBanner />


    </div>
    
    
    
  );
};

export default Products;
