import React from 'react';
import './Style.css';
import ReactDOM from "react-dom/client";
import ExploreMars from './Explore';
import { Link } from 'react-router-dom';
const MarsLane = () => {
  return (
    <div className="Whole">
      <div className="Header">
        <div className="nav">
          <ul>
            
            <a href="index.html"><img className="logo" src="https://blogger.googleusercontent.com/img/a/AVvXsEin2Af7lmQbntSMxSgk4pL1qPjp_7iBFFXkJNUSTo1MYQs-Xx3cUPifHHKcoT_km0C8Puja9Tqj8-Ncx5rAwXJ5JWE5jTjFtnyKN4RYV-nlf78se3MMi7ead2Kf5EHW2N3NEqN1hI9DM5awBkMp5h0a_xoXzXF1FOwzxpptEIuOlUiqXg4oKAl_1o8" height="80px" width="80px" /></a>
            <li className="navhome" style={{ marginRight: '30px' }} id="navele">
              <Link to="/About" >ABOUT US</Link></li>
            <li className="nav" id="nevele">
              <Link to="tet">TESTMONIAL</Link>
              </li>
            <li className="navexp" id="navele">
              <Link to="/ExploreMars">EXPLORE</Link>
              </li>
            <li className="navhome" id="navele"><a className='nava' href="index.html">HOME</a></li>
            
          </ul>
         
        </div>
        <div className="headcon">
          <h1>Expore Mars</h1><br />
          <h3>In different ways..</h3>
          <Link to="Book">Travel to Red</Link>
        </div>
      </div>
      <div className="cardcont">
        <div className="card1">
          <table>
            <tr>
              <td><img src="https://i.pinimg.com/564x/35/3a/f8/353af8f30880ee206f3dda000e5d4858.jpg" height="300px" width="auto" style={{ paddingLeft: '100px', paddingBottom: '40px' }} /></td>
              <td>
                <h3 style={{ paddingLeft: '50px', fontSize: '32px', fontFamily: 'Bruno Ace SC, cursive', paddingBottom: '20px' }}>Traveling Duration</h3>
                <p style={{ textAlign: 'start', paddingLeft: '10px', paddingRight: '50px' }}>The travel duration from Earth to Mars depends on several factors, such as the speed of the launch, the alignment of the planets, and the length of the journey. According to web search results, the total journey time from Earth to Mars takes between 150-200 days12 and is only possible approximately every two years3 due to the different orbits around the Sun of Earth and Mars. The average distance between Earth and Mars is 140 million miles42.</p>
              </td>
            </tr><br />
            <tr>
              <td>
                <h3 style={{ paddingLeft: '50px', fontSize: '32px', fontFamily: 'Bruno Ace SC, cursive', paddingBottom: '20px' }}>Beauty of Mars</h3>
                <p style={{ textAlign: 'start', paddingLeft: '100px', paddingRight: '30px' }}>The beauty of Mars is a subjective topic, but some people may appreciate its diverse and rugged terrain, its ancient volcanoes and canyons, its polar ice caps, and its evidence of past water activity. According to web search results, some amazing photos of Mars can be found on various websites123, and some beautiful animations of Mars exploration missions can be seen online1. Mars is also a dynamic planet with seasons and a thin atmosphere4.</p>
              </td>
              <td><img src="https://images.hdqwalls.com/wallpapers/astronaut-on-mars-4k-ei.jpg" height="300px" width="auto" style={{ paddingBottom: '40px' }} /></td>
            </tr><br />
            <tr>
              <td><img src="https://www.athomeprep.com/wp-content/uploads/2019/07/mars-lander-768x402.jpg" height="300px" width="auto" style={{ paddingLeft: '200px', paddingBottom: '40px' }} /></td>
              <td>
                <h3 style={{ paddingLeft: '50px', fontSize: '32px', fontFamily: 'Bruno Ace SC, cursive', paddingBottom: '20px' }}>Landing Experience</h3>
                <p style={{ textAlign: 'left', paddingLeft: '30px' }}>Perseverance targeted a 28-mile-wide ancient lake bed and river delta, the most challenging site yet for a NASA spacecraft landing on Mars. Rather than being flat and smooth, the small landing site is littered with sand dunes, steep cliffs, boulders, and small craters.</p>
              </td>
            </tr><br />
          </table>
        </div>
      </div>
      <div className="footer">
        <div className="footcon">
          <div className="contactus">
            <h3 style={{ fontFamily: 'Bruno Ace SC, cursive' }}>Contact us</h3><br />
            <input type="emial" placeholder="Your Email Address" /><br /><br />
            <input type="text" placeholder="Enter your queries" /><br /><br />
            <input type="Submit" />
          </div>
          <div className="contactadre">
            <h3 style={{ fontFamily: 'Bruno Ace SC, cursive' }}>Address</h3>
            <p>Mars Lane,<br />1030 15th Street N.W. Suite 220E Washington,<br />DC 20005-1503.</p><br />
            <h3 style={{ fontFamily: 'Bruno Ace SC, cursive' }}>Mobile No.</h3>
            <p>+19872479292</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarsLane;
