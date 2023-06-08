import React from 'react';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="body" style={{color:'white'}}>
      <video autoPlay muted loop id="myVideo">
        <source src="./Asset/video.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="cointainor">
        <h1>About Us</h1>
        <br />
        <br />
        <h3>Welcome to MarsLane: Embark on a Galactic Adventure!</h3>
        <br />
        <p>
          At MarsLane, we believe that exploration knows no bounds. Our vision
          is to open up the wonders of Mars to intrepid travelers from Earth,
          offering a once-in-a-lifetime opportunity to experience the red
          planet like never before. With cutting-edge technology and a passion
          for interplanetary travel, we are proud to be at the forefront of the
          emerging Mars tourism industry.
        </p>
        <br />
        <br />
        <h3>About MarsLane:</h3>
        <br />
        <p>
          MarsLane is a pioneering space travel company dedicated to making
          space tourism a reality. We are fueled by a team of visionaries,
          scientists, and adventurers who share a common dream: to provide
          unparalleled access to the mysteries and marvels of Mars. Our mission
          is to offer safe, immersive, and awe-inspiring journeys for all those
          who dare to venture beyond Earth's atmosphere.
        </p>
        <br />
        <h3>Why Choose MarsLane?</h3>
        <br />
        <p>
          1. Expertise in Space Travel: With years of experience and expertise
          in the field of space exploration, MarsLane stands as a leader in the
          industry. Our team of renowned scientists, engineers, and astronauts
          ensures that every aspect of your journey is meticulously planned,
          and your safety is our utmost priority.
        </p>
        <p>
          2. Unforgettable Martian Experiences: At MarsLane, we understand that
          visiting Mars is more than just a trip—it's an experience that will
          shape your perspective on the universe. From breathtaking views of the
          Martian landscape to thrilling extraterrestrial activities, we curate
          unforgettable adventures that will leave you with memories to cherish
          for a lifetime.
        </p>
        <p>
          3. Cutting-Edge Technology: MarsLane prides itself on its
          state-of-the-art spacecraft and pioneering technology. Our vessels are
          equipped with advanced life support systems, gravity simulation
          capabilities, and cutting-edge communication devices, ensuring that
          you can explore Mars comfortably and safely while staying connected to
          Earth.
        </p>
        <p>
          4. Expertly Curated Itineraries: Our team of seasoned travel experts
          and astrobiologists has crafted meticulously planned itineraries that
          cater to diverse interests and durations of stay. Whether you're
          seeking a short stay or an extended exploration, we offer a range of
          packages tailored to suit your preferences, ensuring that every moment
          on Mars counts.
        </p>
        <p>
          5. Sustainable Space Tourism: At MarsLane, we are committed to
          promoting sustainable practices in space tourism. We work closely with
          international space agencies and environmental organizations to
          minimize our ecological footprint and preserve the pristine Martian
          environment for future generations of explorers.
        </p>
        <br />
        <h3>Join Us on the Journey:</h3>
        <br />
        <p>
          Are you ready to be part of history? MarsLane invites you to embark on
          an extraordinary adventure beyond Earth's horizon. Discover the
          wonders of Mars, witness stunning sunsets over Olympus Mons, walk in
          the footsteps of ancient riverbeds, and immerse yourself in the
          mysteries of this captivating planet.
        </p>
        <p>
          Explore our website to learn more about our upcoming expeditions,
          travel packages, and the rigorous training programs that prepare our
          guests for the journey of a lifetime. Connect with us today, and
          together, let's make your Martian dreams a reality!
        </p>
        <br />
        <br />
        <h2>MarsLane: Where Boundaries Fade, and Dreams Take Flight.</h2>
      </div>
    </div>
  );
};

export default AboutUs;
