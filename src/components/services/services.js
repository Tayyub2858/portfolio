import React from 'react'
// import { Card } from 'react-bootstrap';
import './services.css'
import Heartemoji from '../../images/heartemoji.png';
import Glesses from '../../images/glasses.png'
import Humble from '../../images/humble.png'
import Card from './card/card';
import Resume from '../../PDFile/Expert.pdf'
export default function Services() {
  return (
    <div className='services '>
        {/* left side */}
        <div className='s-left'>
            <div className='awesome'>
                <span>My Awesome</span>
                <span>Services</span>
                <span>Expedita eveniet accusantium,
                     consequuntur facilis quibusdam fuga <br /> cum maiores dolorum perferendis voluptates, 
                     doloremque nemo <br /> impedit delectus aliquid optio, non vel corporis amet.
                </span>
               <a href={Resume}> <button className='button s-button'>Download CV</button></a>
                <div className='blur s-blur' style={{background:"#abf1ff94"}}></div>
            </div>
        </div>  
            {/* Right side  */}
            <div className='cards'>
                    {/* First card  */}
                    <div style={{left : '30rem'}}>
                      <Card
                        emoji={Heartemoji}
                        heading={'Desgin'}
                        details = {'Figma, Photoshope,adobeShope'}
                      />
                    </div>

                    {/* secomnd cards  */}

                    <div style={{top:'14rem',left : '8rem'}}>
                      <Card
                        emoji={Glesses}
                        heading={'Developer'}
                        details = {'Html, CSS,JAvascript,React'}
                      />
                    </div>
                    {/* Thired cards  */}
                    <div style={{top:'22rem',left : '27rem'}}>
                      <Card
                        emoji={Humble}
                        heading={'Backend'}
                        details = {'Node.js,MongooDB,Mongoos'}
                      />
                    </div>
            </div>
    </div>
  )
}
