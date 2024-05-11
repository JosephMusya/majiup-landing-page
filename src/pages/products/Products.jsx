import React from "react";
import "./products.css";
import { BsArrowRight } from "react-icons/bs";
import { GiWaterTank, GiWaterTower } from "react-icons/gi";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaHandHoldingWater, FaHandsHelping } from "react-icons/fa";
import { MdOutlineAutorenew } from "react-icons/md";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import { FaTruckDroplet } from "react-icons/fa6";

const Products = () => {
  const iconSize = 60;
  return (
    <div className="products" id="products">
      <h1>
        <Rotate cascade>Our products & services</Rotate>
      </h1>
      {/* <button className='view-more'>See all Features <BsArrowRight /></button> */}
      <div className="products-content">
        <Zoom>
          <div>
            <strong>Water delivery platform</strong>
            <FaTruckDroplet color="#0072bb" size={iconSize} />
            <article>
              Access a pool of water vendors and request for a refill.
            </article>
            <button>
              Learn More
              <BsArrowRight />
            </button>
          </div>
          <div>
            <strong>Monitoring Water Levels</strong>
            <GiWaterTower color="#0072bb" size={iconSize} />
            <article className="desc">
              Get real time information of water levels left in your tank using
              Majiup devices.
            </article>
            <button>
              Learn More
              <BsArrowRight />
            </button>
          </div>
          <div>
            <strong>Analytics</strong>
            <AiOutlineBarChart color="#0072bb" size={iconSize} />
            <article>
              Say goodbye to misuse of water. Using our devices ensures that you
              keep track of any potential leakages!
            </article>
            <button>
              Learn More
              <BsArrowRight />
            </button>
          </div>
        </Zoom>
      </div>
      <br />
    </div>
  );
};

export default Products;
