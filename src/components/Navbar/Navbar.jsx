import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyle.css'

export default function Navbar() {
    const [isMenuClosed, setMenuClosed] = useState(true);
  return (
    // <div className='n-wrapper'>
    //         <div className='n-left'>
    //             <div className='n-name'>Tayyub</div>
    //         </div>
            
    //         <div className='n-right'>
    //             <div className='n-list'>
    //                 <ul>
    //                     <li>Home</li>
    //                     <li>Services</li>
    //                     <li>Experience</li>
    //                     <li>Portfolio</li>
    //                     <li>Testimonials</li>
    //                 </ul>
    //             </div>
    //             <button className='button n-button'>
    //                 Contact
    //             </button>
    //         </div>
    // </div>
    <>
        <div className='nav-container'>
            <nav>
                <div className="nav-brand">
                    <h1 className='nav-logo-title'>TayyubRafique</h1>
                </div>
                <div className="nav-links">
                    <button className='nav-btn'>Home</button>
                    <button className='nav-btn'>Services</button>
                    <button className='nav-btn'>Portfolio</button>
                    <button className='nav-btn'>Testimonials</button>
                    <button className='button n-button'>Contact</button>
                </div>
                <div className="nav-hamburguer-icon" onClick={() => setMenuClosed(!isMenuClosed)}>☰</div>
            </nav>
            <div className={`overlay-container${isMenuClosed ? "-hidden" : "-show"}`}>
                <div>
                <div className="overlay-buttonClose" onClick={() => setMenuClosed(!isMenuClosed)}><span>&times;</span></div>
                    <div className="overlay-menu-wrapper">
                        <div className="overlay-menu">
                           <button className="nav-btn-mb">HOME</button>   
                            <button className="nav-btn-mb">Services</button>
                            <button className="nav-btn-mb">Portfolio</button>
                            <button className="nav-btn-mb">Testimonials</button>
                           <button className="nav-btn-mb">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}