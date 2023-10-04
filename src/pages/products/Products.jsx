import React from 'react';
import './products.css';
import { BsArrowRight } from 'react-icons/bs';
import { GiWaterTank, GiWaterTower } from 'react-icons/gi';
import { AiOutlineBarChart } from 'react-icons/ai';
import { FaHandHoldingWater, FaHandsHelping } from 'react-icons/fa';
import { MdOutlineAutorenew }  from 'react-icons/md';

const Products = () => {
    const iconSize = 60;
    return (
        <div className='products'>
            <h1>Product Features</h1>
            {/* <button className='view-more'>See all Features <BsArrowRight /></button> */}
            <div className='products-content'>
                <div>
                    <strong>Monitoring Water Levels</strong>
                    <GiWaterTower size={iconSize}/>
                    <article className='desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a fuga exercitationem reprehenderit eius aliquid.
                    </article>
                    <button>
                        Learn More
                        <BsArrowRight />
                    </button>
                </div>
                <div>
                    <strong>Monitoring water quality</strong>
                    <FaHandHoldingWater size={iconSize} />
                    <article>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a fuga exercitationem reprehenderit eius aliquid.
                    </article>
                    <button>
                        Learn More
                        <BsArrowRight />
                    </button>
                </div>
                <div>
                    <strong>Water History Usage</strong>
                    <AiOutlineBarChart size={iconSize}/>
                    <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a fuga exercitationem reprehenderit eius aliquid.
                    </article>
                    <button>
                        Learn More
                        <BsArrowRight />
                    </button>
                </div>
                <div>
                    <strong>Automatic pump control</strong>
                    <MdOutlineAutorenew size={iconSize}/>
                    <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a fuga exercitationem reprehenderit eius aliquid.
                    </article>
                    <button>
                        Learn More
                        <BsArrowRight />
                    </button>
                </div>
                <div>
                    <strong>Copilot Assistant</strong>
                    <FaHandsHelping size={iconSize}/>
                    <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a fuga exercitationem reprehenderit eius aliquid.
                    </article>
                    <button>
                        Learn More
                        <BsArrowRight />
                    </button>
                </div>
                <div>
                    <strong>Overflow protection</strong>
                    <GiWaterTank  size={iconSize}/>
                    <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a fuga exercitationem reprehenderit eius aliquid.
                    </article>
                    <button>
                        Learn More
                        <BsArrowRight />
                    </button>
                </div>
            </div>
            <br />
        </div>
    );
}

export default Products;
