import React from 'react';
import './intro.css'
import Github from '../../images/github.png';
import Linkedin from '../../images/linkedin.png';
import Instagram from '../../images/instagram.png';
import Vector1 from '../../images/Vector1.png';
import Body1  from '../../images/boy.png';
import Vector2 from '../../images/Vector2.png';
import Flaoting from './floating-div/flaoting';
import Crown from '../../images/crown.png';
import Thumbil from '../../images/thumbup.png';
import Glamimog from '../../images/glassesimoji.png'
function Intro() {
  return (
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hy! I AM</span>
                    <span>Tayyub Rafique</span>
                    <span> I Am Frontend Developer width 
                        high lavel of Experience in <br /> Frontend Developer,
                         Producting the Quality word:</span>
                </div>
              <a href="">  <button className='button i-button'>
                    Hire Me
                </button></a>
               <div className='i-icons'>
                  <a href=""> <img src={Github} alt="" /></a>
                  <a href=""> <img src={Linkedin} alt="" /></a>
                   <a href=""><img src={Instagram} alt="" /></a>
               </div>
            </div>

            <div className='i-right'>
                <img src={Vector1} alt="" />
                <img src={Vector2}  alt="" />
                <img src={Body1} className="boy-img" alt="" />
                <img src={Glamimog} className="glassmoji" alt="" />
                <div style={{top:'-4%' , left : '70%' }}>
                    <Flaoting image={Crown} text1='FRONT-END' text2='DEVELOPER'/>
                </div>
                <div style={{top:'80%', left:'-10%'}}>
                    <Flaoting image={Thumbil} text1='Best Desgin' text2='Award '/>
                </div>
                {/* div blur  */}
                <div className='blur' style={
                    {background:"#c1f5ff",
                    top:'30rem',
                    width: '21rem',
                    height:'20rem',
                    left:'-7rem'
                        }
            }>

                </div>
            </div>
        </div>  
  )
}

export default Intro;