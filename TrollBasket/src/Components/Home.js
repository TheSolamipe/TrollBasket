import React from "react";
import "./../styles/Home.css";
import Product from "./Product";
import SliderContainer from "./Slider";
import HomeIcons from "./HomeIcons";

function Home() {
  return (
    <div className="home">
      <SliderContainer />
      <HomeIcons />
      {/* Product, product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="1231"
          title="AmazonBasics Medium Point and Shoot Camera Case - 5 x 3 x 2 Inches, Black, Best suited for Canon 530HS, Canon SX620, Sony RX-1OO, Canon S120;"
          price={997.32}
          name="Hand book"
          rating={4}
          image="../Assets/product1.png"
        />
        <Product
          id="1232"
          title="2 in 1 Laptop jumper x1 Windows 10 Laptop FHD Touchscreen Display Laptop Computer 11.6 inch 6GB RAM 128GB ROM, 【Amazing viewer experience】"
          price={531.32}
          name="NIKE Huararche 2019"
          rating={4}
          image="../Assets/product2.png"
        />
        <Product
          id="1233"
          title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, - Black"
          price={109.99}
          name="2019 premium cocacola"
          rating={5}
          image="../Assets/product3.png"
        />
      </div>
      <div className="home__row">
        <Product
          id="1234"
          title="2020 [Upgraded] 1080P Webcam with Microphone & Privacy Cover - NexiGo 110-degree Wide Angle Widescreen USB HD Camera, Plug and Play, Laptop "
          price={349.99}
          name="cashew snacks"
          rating={4}
          image="../Assets/product4.png"
        />
        <Product
          id="1235"
          title="Wrist watch for them boys, aluminium handle Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR"
          price={563.23}
          name="chewy gum pack"
          rating={5}
          image="../Assets/product5.png"
        />
        <Product
          id="1236"
          title="Soundance Laptop Stand, Aluminum Computer Riser, Ergonomic Laptops Elevator for Desk, Metal Holder Compatible with Mac MacBook Pro Air"
          price={410.56}
          name="lovely bean box"
          rating={4}
          image="../Assets/product6.png"
        />
      </div>
      <div className="home__row">
        <Product
          id="1237"
          title="iBUYPOWER Gaming PC Computer Desktop Element 9260 (Intel Core i7-9700F 3.0Ghz, NVIDIA GeForce GTX 1660 Ti 6GB, 16GB DDR4, 240GB SSD, "
          price={999.35}
          name="note pad"
          rating={4}
          image="../Assets/product1.png"
        />
        <Product
          id="1238"
          title="Zevro Zero Gravity Magnetic Spice Rack with 12 Canisters, setting the pace for the newbies to pick from. Designed to preserve freshness ,Easy, one handed operation "
          price={674.45}
          name="2019 premium cocacola"
          rating={5}
          image="../Assets/product3.png"
        />
      </div>
    </div>
  );
}

export default Home;
