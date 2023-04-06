import React from 'react'
import './work.css';
import Upwork from '../../images/Upwork.png'
import Fiver from '../../images/fiverr.png'
import Facebook from '../../images/Facebook.png'
import Linkdin from '../../images/linkdin2.png'
import Shopify from '../../images/Shopify.png'


export default function Work (){
  return (
    <div className='work'>  
        <div className="awesome">
          <span>Works For All These</span>
          <span>Brands & Clients</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            <br />
            Sequi, id. Quos dolorem qui facere, nihil, 
            <br />
            ulpa illum asperiores voluptas pariatur ducimus magni velit veniam, 
            <br />
            laboriosam eaque enim iste porro deserunt.
          </span>

            <button className='button s-button'>Hire Me</button>
            <div className='blur s-blur' style={{background:"#abf1ff94"}}></div>
        </div>

        <div className='w-right'>
            <div className='w-mianCircle'>
              <div className='w-secCircle'>
                <img src={Upwork} alt="" />
              </div>
              <div className='w-secCircle'>
                <img src={Fiver} alt="" />
              </div>
              <div >
                <img src={Linkdin} alt="" />
              </div>
              <div className='w-secCircle'>
                <img src={Shopify} alt="" />
              </div>
              <div className='w-secCircle'>
                <img src={Facebook} alt="" />
              </div>
                {/* background circle   */}

                <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div>

            </div>
        </div> 

    </div>
  )
}
