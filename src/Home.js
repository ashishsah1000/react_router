import React from "react";
import "./Home.css";
import Product from "./Product";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <img
        className="homeBannerImage"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/HeroJune21/1x_D_XCMCampaign_opt04._CB666416035_.jpg"
        alt="home banner"
      />
      <div className="products_row">
        <Product
          id="123"
          title="Learning React mastercourse"
          price={122}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/417ExARdRYL._SX384_BO1,204,203,200_.jpg"
        />
        <Product
          id="123"
          title="Learning React mastercourse"
          price={122}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/417ExARdRYL._SX384_BO1,204,203,200_.jpg"
        />
      </div>
      <div class="products_row">
        <Product
          id="123"
          title="Learning React mastercourse"
          price={122}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/417ExARdRYL._SX384_BO1,204,203,200_.jpg"
        />
        <Product
          id="123"
          title="Learning React mastercourse"
          price={122}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/417ExARdRYL._SX384_BO1,204,203,200_.jpg"
        />
        <Product
          id="123"
          title="Learning React mastercourse"
          price={122}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/417ExARdRYL._SX384_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="products_row">
        <Product
          id="123"
          title="Learning React mastercourse"
          price={122}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/417ExARdRYL._SX384_BO1,204,203,200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
