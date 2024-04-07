import React, { useState } from 'react';
import logo from '../Assets/White Logo.png';
import heroImage from '../Assets/andy-kelly-0E_vhMVqL9g-unsplash 2.png'
import Image1 from '../Assets/image 2.png'
import Image2 from '../Assets/image 1.png'
import Line from '../Assets/Line 6.png'

import './styles.css'; // Import the CSS file

const Index = () => {
    const [showLinks, setShowLinks] = useState(false);

    const handleToggle = () => {
        setShowLinks(!showLinks);
        
    };

    const handleClose = () => {
        setShowLinks(false);
    };


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: showLinks ? 'white' : '#6B3CC9',width:'100%' }}>
                <div className="container-fluid" >
                    <a className="navbar-brand" href="#home" style={{ marginLeft: '30px' }}>
                        <img src={logo} alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" onClick={handleToggle} aria-label="Toggle navigation" style={{ backgroundColor: '#6B3CC9', display: showLinks ? 'none' : '',border:'none', }}>
                        <span className="navbar-toggler-icon" style={{fill:'white' }}></span>
                    </button>
                    <div
                        className={`collapse navbar-collapse justify-content-end ${showLinks ? 'show' : ''}`}
                    >
                        {showLinks && (
                            <button className="btn-close" onClick={handleClose} aria-label="Close" style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'white' }}>
                                <span aria-hidden="true"></span>
                            </button>
                        )}
                        <ul className={`navbar-nav ml-auto `}>
                            <li className="nav-item">
                                <a className="nav-link" href="#home" style={{ fontSize: '14px', color: 'black', display: showLinks ? 'block' : 'none' }}>HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#home" style={{ fontSize: '14px', color: showLinks ? 'black' : 'white' }}>SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#link" style={{ fontSize: '14px', color: showLinks ? 'black' : 'white' }}>ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#link" style={{ fontSize: '14px', color: showLinks ? 'black' : 'white' }}>CONTACT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#link" style={{ fontSize: '14px', color: showLinks ? 'black' : 'white' }}>CAREERS</a>
                            </li>
                            {/* Add more <li> elements for additional links */}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="hero-container" style={{ position: 'relative',width:'100%' }}>
    <img src={heroImage} alt="Hero" style={{ height: 'auto', width: '100%',backgroundPosition:'center',backgroundSize:'cover' }} />

    {/* <div className="second-container "  style={{position: "absolute",background: 'linear-gradient(90deg, rgba(103,230,148,1) 23%, rgba(127,213,235,1) 57%), rgb(103,230,148)', width: '90%', maxWidth: 768, height:'45%', bottom: '5%', top:'50%', left: '5%' }}>
        <h1 style={{color:'white',alignItems:'start',textAlign:'start',marginLeft:'7%'}}>
        We Crush Your<br/> 
        Competitors, Goals, And <br/>
        Sales Records - Without <br/>
         The B.S.
        </h1>
        {/* <button class="btn btn-sm" style={{ backgroundColor: '#F28D35', color: 'white',fontWeight:'700', border: 'none', borderRadius: '5px', marginTop: '5%', marginRight:'63%', cursor: 'pointer', width: 'fit-content'}}>GET FREE CONSULTATION</button> */}
        {/* <button className="btn btn-sm" style={{ position: 'absolute', backgroundColor: '#F28D35', color: 'white', fontWeight: '700', border: 'none', borderRadius: '5px', marginTop: '5%', left: '5%', cursor: 'pointer', width: 'fit-content' }}>GET FREE CONSULTATION</button> */}
    {/* </div> */} 

    <div className="d-flex align-items-start mt-3" style={{ position: "absolute", background: 'linear-gradient(90deg, rgba(77,202,121,1) 3%, rgba(28,189,221,1) 87%)', height: 280, width: 540 }}>
                    <div style={{ margin: '25px' }}>
                        <h1 style={{ margin: '0', color: '#fff', textAlign: 'start' }}>We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</h1>
                        <button class="btn btn-sm" style={{ backgroundColor: '#F28D35', color: 'white',fontWeight:'700', border: 'none', padding: '10px 20px', borderRadius: '5px', marginTop: '15px', cursor: 'pointer',marginRight:'55%'}}>GET FREE CONSULTATION</button>
                    </div>
                </div>
    
</div>
<div className="container-1" >
                <div className="row" style={{width:'100%'}}>
                    <div className="col-md-6" >
                        {/* Content for the first column */}
                        <img src={Image1} alt=""  style={{maxWidth:'100%'}} />
                    </div>
                    <div className="col-md-6" style={{marginTop:'8%'}}>
                        {/* Content for the second column */}
                        <h2 style={{ color: '#6B3CC9' }}>Web & Mobile App Development</h2>
                        <p style={{textAlign:'start',width:'60%',marginLeft:'21%'}}>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                        <button className="btn1" style={{ backgroundColor: '#F28D35', color: 'white',fontWeight:'700', border: 'none', padding: '10px 20px', borderRadius: '5px', marginTop: '15px', cursor: 'pointer',marginRight:'44%'}}>Learn More</button>
                    </div>
                </div>
            </div>



            <div className="container-2" >
                <div className="row" style={{width:'100%'}}>
                <div className="col-md-6 order-md-1 order-2" style={{marginTop:'4%'}}>
                        {/* Content for the second column */}
                        <h2 style={{ color: '#6B3CC9' }}>Digital Strategy Consulting</h2>
                        <p style={{textAlign:'start',width:'60%',marginLeft:'26%'}}>Your digital strategy should complement the overall marketing
                                strategy of the company. In online marketing, each component
                                will never work in isolation and every business needs a different
                                mix. We provide a clear concept and strategic overview to find the
                                most efficient model for your business.</p>
                        <button className="btn1" style={{ backgroundColor: '#F28D35', color: 'white',fontWeight:'700', border: 'none', padding: '10px 20px', borderRadius: '5px', marginTop: '15px', cursor: 'pointer',marginRight:'34%'}}>Learn More</button>
                    </div>
                    <div className="col-md-6 order-md-2 order-1" >
                        {/* Content for the first column */}
                        <img src={Image2} alt=""  />
                    </div>
                   
                </div>
            </div>

            <div class="container mt-5" style={{ position: "relative" }}>
                <div class="row justify-content-center" >
                    <div class="col-12 d-flex flex-column justify-content-center align-items-center mb-3">
                        <h2 style={{ color: '#6B3CC9' }}>Frequently asked questions</h2>
                    </div>
                    <div class="col-8 mb-3 " style={{ backgroundColor: '#FAF8FF' }}>
                        <p style={{ color: '#6B3CC9', fontWeight: '500', marginTop: 10, position: 'relative',textAlign:'start' }}>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                            <span style={{ color: '#6B3CC9', fontWeight: '500', fontSize: 20, position: 'absolute', top: 0, right: 0 }}>-</span>
                        </p>
                        <p style={{ color: '#6F6C90',textAlign:'start' }}>Lorem ipsum dolor sit amet consectetur.
                            Faucibus commodo suscipit id ipsum.
                            Elementum ultrices nulla faucibus odio est sed aliquam.
                            Sapien massa morbi risus sagittis tortor integer.</p>
                    </div>
                    <div class="col-8 mb-3 " style={{ backgroundColor: '#FAF8FF' }}>
                        <p style={{ color: '#000000', fontWeight: '500', marginTop: 10, position: 'relative',textAlign:'start' }}>Lorem ipsum dolor sit amet consectetur. Tortores scelerisque integer?
                            <span style={{ color: '#000000', fontWeight: '500', fontSize: 20, position: 'absolute', top: 0, right: 0 }}>+</span>
                        </p>

                    </div>
                    <div class="col-8 mb-3" style={{ backgroundColor: '#FAF8FF' }}>
                        {/* <p style={{color:'#000000',fontWeight:'500',marginTop:10}}>Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?</p> */}
                        <p style={{ color: '#000000', fontWeight: '500', marginTop: 10, position: 'relative',textAlign:'start' }}>Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
                            <span style={{ color: '#000000', fontWeight: '500', fontSize: 20, position: 'absolute', top: 0, right: 0 }}>+</span>
                        </p>
                    </div>
                </div>
            </div>
              

            <div class="container-fluid p-0 mt-5" style={{ backgroundColor: '#6B3CC9', paddingLeft: 0, paddingRight: 0 }}>
                <div class="row mx-0 mb-3" style={{ width: '100%' }}>

                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <img src={logo} class="logo-icon me-5" alt="logo" style={{marginLeft:20,marginTop: 15 }} />

                        <p style={{ marginTop: 10, marginLeft: 120, color: '#FFFFFF', fontWeight: '400', fontSize: 16 ,textAlign:'start'}}>Your goal is our target. Not anything in between. We use online marketing
                            platforms and tools to achieve single objective - your business results.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 mb-3">

                    </div>

                    <div class="col-lg-2 col-md-6 col-sm-12 mb-3">
                        <h6 style={{ fontWeight: 600, marginTop: 15, color: '#FFFFFF', marginLeft: 20, }}>Our Technologies</h6>
                        <ul className="ul1" style={{ listStyleType: 'none', padding: 0, color: '#FFFFFF', fontSize: 16, marginLeft: 80,textAlign:'start' }}>
                            <li>ReactJS</li>
                            <li>Gatsby</li>
                            <li>NextJS</li>
                            <li>NodeJS</li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                        <h6 className="ul2h"style={{ fontWeight: 600, marginTop: 15, color: '#FFFFFF', marginRight: 100, }}>Our Services</h6>
                        <ul className="ul2" style={{ listStyleType: 'none', padding: 0, color: '#FFFFFF', fontSize: 16, marginLeft: 100, textAlign:'start',justifyContent:'center'}}>
                            <li>Social media Marketing</li>
                            <li>Web & Mobile App Development</li>
                            <li>Data & Analytics</li>
                        </ul>
                    </div>
                </div>

                <div class="row justify-content-center align-items-center mx-0" style={{ width: '100%' }}>
                    <div class="col-10 mb-3 d-flex justify-content-center align-items-center" style={{ width: '100%' }}>
                        <div class="content-container3" style={{ width: '100%' }}>
                            <img src={Line} class="line-icon me-2" alt="line" style={{ width: '80%' }} />
                            {/* , marginLeft: '10%', marginRight: '5%' */}
                            <p style={{ color: '#FFFFFF', fontWeight: '500', fontSize: 14, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                <span style={{ marginRight: 20 }}>Privacy Policy</span>
                                <span>|</span>
                                <span style={{ marginLeft: 20 }}>Terms & Conditions</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
         
        </>
    );
};

export default Index;
