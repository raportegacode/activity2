// import React, { useState, Button } from "react";
import './App.css';
import Products from "./product.js";
function App() {

const items = 
  [
    {"id":"1", "name":"NMD_R1 Primeblue - Black", "price":"₱8,000.00", "img":"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d44fa06fc83f4644b7e8acbc01160e1b_9366/NMD_R1_Primeblue_Shoes_Black_GZ9258_01_standard.jpg"},
    {"id":"2", "name":"SUPERSTAR SHOES", "price":"₱5,300.00", "img":"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/SUPERSTAR_SHOES_Black_EG4959_01_standard.jpg" },
    {"id":"3", "name":"Breaknet Shoes", "price":"₱3,100.00", "img":"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ce8a6f3aa6294de988d7abce00c4e459_9366/Breaknet_Shoes_White_FX8707_01_standard.jpg" },
    {"id":"4", "name":"Forum Low Shoes", "price":"₱5,000.00", "img":"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Forum_Low_Shoes_White_FY7756_01_standard.jpg"},
    {"id":"5", "name":"EQ21 Run Shoes", "price":"₱4,500.00", "img":"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a9153313324447daa47daed701513b19_9366/EQ21_Run_Shoes_Grey_GY2195_01_standard.jpg" },
    {"id":"6", "name":"NMD_R1 Primeblue - White", "price":"₱8,000.00", "img":"https://assets.adidas.com/images/w_600,f_auto,q_auto/c3bd9dda9fdd4a7cbc9aad1e00dd0045_9366/NMD_R1_Primeblue_Shoes_White_GZ9260_01_standard.jpg" },
  ]

  
// const prod = JSON.parse(items);

  return (
<div className='App'>
  <header>
    <h2><img className='logo' src='https://img.freepik.com/free-icon/adidas_318-565831.jpg' alt='logo'></img>Adidas Shoe Products</h2>
  </header>
    <div className='tileCont'>
    {items.map((props) =>
      <Products value={props}></Products>)}
    </div>
    <footer>
      <p>Raphael Mardean L. Ortega 4ITD</p>
      <p>IT ELEC4C</p>
  
    </footer>
</div>
  );
}

export default App;
