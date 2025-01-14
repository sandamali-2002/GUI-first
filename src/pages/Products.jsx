import React from 'react'
import './Products.css'
import plane from '../assets/products/plane.jpg';
import poster_1 from '../assets/products/poster 1.png';
import poster_2 from '../assets/products/poster 2.png';

const Products = () => {
  return (
   <div class = "products"> 
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
          <div class="button-container">
          <button class="Add-button">ADD TO CART</button>
          </div>
          </div>
    </div>


    <hr class="h-row"></hr>

    <h1 >OUR OWN TEMPLATES</h1>

      <div class="product_grid">
        <div class="product_priview">
        <img src="src/assets/products/IMG_7261.png"  class="product_pic"/>
          <div class="product_info">
          <span>Fit: Oversized</span><br></br>
          <span> Color: Black</span><br></br>
          <span> Available sizes: S, M, L</span>
          <div class="button-container">
          <button class="Add-button">ADD TO CART</button>
          </div>
         </div>
        </div>
        
        <div class="product_priview">
           <div class="product_item">
            <img src="src/assets/products/IMG_7258.png"  class="product_pic"/>
            </div>
          <div class="product_info">
            <di class="vertical"></di>
          <span>Fit: Oversized</span><br></br>
          <span> Color: Black</span><br></br>
          <span> Available sizes: S, M, L</span>
          <div class="button-container">
          <button class="Add-button">ADD TO CART</button>
          </div>
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
          <div class="button-container">
          <button class="Add-button">ADD TO CART</button>
          </div>
         </div>
        </div>

      </div>

      <hr class="h-row"></hr>

      <div class="product_row">
      <div class="column big_pic1">
      <img src="src/assets/products/poster 2.png" class="product-bigpic" />
      </div>

      <div class="column big_pic1_info">
        <h2>WARNING: MAY CONTAIN ANGELS</h2>
      </div>
      </div>
      
      <div class="product_row2">
      
      <div class="column big_pic_info2">
        <h2>WRAPE YOURSELF IN LOVE</h2>
      </div>
      <div class="column big_pic2">
      <img src="src/assets/products/6.png" class="product-bigpic2" />
      </div>
      </div>

      <div class="product_row">
      <div class="column big_pic1">
      <img src="src/assets/products/poster 1 -1.png" class="product-bigpic3" />
      </div>

      <div class="column big_pic1_info">
        <h2>
        WRAP YOURSELF IN CONFIDENT
        </h2>
      </div>
      </div>

    
      <div class="form-section">
       <div class="form-container">
      <form class="form">
        <div class="form-group">
          <label for="email">Company Email</label>
          <input type="text" id="email" name="email" required=""/>
        </div>
        <div class="form-group">
          <label for="textarea">How Can We Help You?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
        </div>
        <button class="form-submit-btn" type="submit">Submit</button>
      </form>
    </div>
    </div>



    </div>
    
    
    
  );
};

export default Products;
