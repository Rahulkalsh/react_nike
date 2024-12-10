const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div >
        <img className="disable_image" src="images/shoe_image.png" alt="Shoes" />
        </div> 

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="images/flipkart.png" alt="Flipkart" />
            <img src="images/amazon.png" alt="Amazon" />
          </div>
        </div>
      </div>
      <div>
        <img className="hero-image" src="images/shoe_image.png" alt="Shoes" />
      </div>
    </main>
  );
};

export default Hero;
