import React from "react";
import "./Compus.css";
import gallery1 from "../../assets/gallery-1.png";
import gallery2 from "../../assets/gallery-2.png";
import gallery3 from "../../assets/gallery-3.png";
import gallery4 from "../../assets/gallery-4.png";
import whiteArrow from "../../assets/white-arrow.png";

const Compus = () => {
  return (
    <div className="campus" id="Compus">
      <div className="gallery">
        <img src={gallery1} alt="Gallery 1" />
        <img src={gallery2} alt="Gallery 2" />
        <img src={gallery3} alt="Gallery 3" />
        <img src={gallery4} alt="Gallery 4" />
      </div>
      <button className="btn dark-btn">
        See more here <img src={whiteArrow} alt="White Arrow" />
      </button>
    </div>
  );
};

export default Compus;
