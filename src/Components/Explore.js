import React from 'react';

const ExploreMars = () => {
  return (
    <div className="cardcont">
      <div className="card1">
        <table>
          <tr>
            <td>
              <img
                src="https://cdn.mos.cms.futurecdn.net/T94xwew7fRccGFs6d6azUV-1200-80.jpg"
                height="300px"
                width="auto"
                style={{ paddingLeft: "100px", paddingBottom: "40px" }}
              />
            </td>
            <td>
              <h3
                style={{
                  paddingLeft: "50px",
                  fontSize: "32px",
                  fontFamily: "'Bruno Ace SC', cursive",
                  paddingBottom: "20px",
                }}
              >
                Touring Mars
              </h3>
              <p
                style={{
                  textAlign: "start",
                  paddingLeft: "10px",
                  paddingRight: "50px",
                }}
              >
                The travel duration from Earth to Mars depends on several
                factors, such as the speed of the launch, the alignment of the
                planets, and the length of the journey. According to web search
                results, the total journey time from Earth to Mars takes between
                150-200 days12 and is only possible approximately every two
                years3 due to the different orbits around the Sun of Earth and
                Mars. The average distance between Earth and Mars is 140 million
                miles42.
              </p>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <h3
                style={{
                  paddingLeft: "50px",
                  fontSize: "32px",
                  fontFamily: "'Bruno Ace SC', cursive",
                  paddingBottom: "20px",
                }}
              >
                Olympus Mons
              </h3>
              <p
                style={{
                  textAlign: "start",
                  paddingLeft: "100px",
                  paddingRight: "30px",
                }}
              >
                The beauty of Mars is a subjective topic, but some people may
                appreciate its diverse and rugged terrain, its ancient
                volcanoes and canyons, its polar ice caps, and its evidence of
                past water activity. According to web search results, some
                amazing photos of Mars can be found on various websites123, and
                some beautiful animations of Mars exploration missions can be
                seen online1. Mars is also a dynamic planet with seasons and a
                thin atmosphere4.
              </p>
            </td>
            <td>
              <img
                src="https://cdn.mos.cms.futurecdn.net/XNRcoHujh5mZHmPQZzYbgH-1200-80.jpg"
                height="300px"
                width="auto"
                style={{ paddingBottom: "40px" }}
              />
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <img
                src="https://cdn.mos.cms.futurecdn.net/DKavvKEEdrtRJhfKXndKeW-1200-80.jpg"
                height="300px"
                width="auto"
                style={{ paddingLeft: "200px", paddingBottom: "40px" }}
              />
            </td>
            <td>
              <h3
                style={{
                  paddingLeft: "50px",
                  fontSize: "32px",
                  fontFamily: "'Bruno Ace SC', cursive",
                  paddingBottom: "20px",
                }}
              >
                Mars Rovers
              </h3>
              <p
                style={{
                  textAlign: "start",
                  paddingLeft: "10px",
                  paddingRight: "50px",
                }}
              >
                Mars rovers are robotic vehicles that explore the surface of
                Mars. According to web search results, some of the notable Mars
                rovers include Spirit, Opportunity, Curiosity, and Perseverance.
                These rovers have provided valuable information about the
                Martian surface, geological features, and the potential for
                past or present life on Mars12. Some of the rovers have also
                captured stunning photos and videos of the Martian landscape.
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ExploreMars;
