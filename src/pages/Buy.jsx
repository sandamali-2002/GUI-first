import React, { useState } from "react";
import "./Buy.css";

function Buy() {
  const [size, setSize] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with size:", size);
  };

  return (
    <div className="buy-page-container">
      {/* Logo at the top */}
      <div className="logo">
        <img src="/images/black-tod-white.png" className="logo-pic" alt="Black Todd Logo" />
      </div>

      {/* Login Box Below */}
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" name="name" required />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="intro" required />
            <label>Description about your design</label>
          </div>
          <div className="user-box">
            <input type="file" name="file" onChange={handleFileChange} required />
            <label>Upload your design</label>
          </div>
          <div className="user-box">
            <select value={size} onChange={(e) => setSize(e.target.value)} name="size" required>
              <option value="" disabled>
                Select Size
              </option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="x-large">X-Large</option>
            </select>
          </div>
          <div className="user-box">
            <input type="number" name="quantity" required />
            <label>Quantity</label>
          </div>
          <center>
            <div className="submit">
              <input type="submit" value="Submit" className="submit" />
            </div>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Buy;
