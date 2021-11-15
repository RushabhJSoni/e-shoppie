import React, { useState, useEffect} from 'react';
import axios from 'axios';
import "./Home.css";
import Product from './Product.js';



const productUrl ='https://fakestoreapi.com/products';


function Home() {


  
  let [userData, setUserData] = useState([]);
  console.log(userData);
  
  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    const response = await axios.get(productUrl);
    setUserData(response.data);
    console.log(response.data);
  };
  
 
  
  
  
 

  return (
    <div className="home">
      
      <div className="home_container">
        <img className="home__image" src="https://www.teahub.io/photos/full/43-437808_2560x1440-wallpaper-green-background-texture-solid-dark-green.jpg" alt=""/>

        <div className="home__row">

        <Product key={userData.id} item={userData[0]} />
        <Product key={userData.id} item={userData[1]} />
        <Product key={userData.id} item={userData[2]} />
        </div>
        <div className="home__row">
        <Product key={userData.id} item={userData[3]} />
        <Product key={userData.id} item={userData[4]} />
        <Product key={userData.id} item={userData[5]} />
        
        </div>
        <div className="home__row">
        <Product key={userData.id} item={userData[6]} />
        <Product key={userData.id} item={userData[7]} />
        <Product key={userData.id} item={userData[8]} />
        
        </div>
      </div>
    </div>
  )
}

export default Home;
