import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Team.css";
function Team() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
    <Carousel responsive={responsive}>
   
    <div className='team_inner'>
    <img src='../image/team1.jpg'></img>
    <h3> Akshita Thakur</h3>
    <p>CE0 & Founder</p>
    <p> shjdg askjdshf asjfjgf ajsfjdhf assjfua ahgysg</p>
    </div>

    <div className='team_inner'>
    <img src='../image/team2.jpg'></img>
    <h3> Prabhjot kapila</h3>
    <p>UI/UX Designer</p>
    <p> shjdg askjdshf asjfjgf ajsfjdhf assjfua ahgysg</p>
    </div>

    <div className='team_inner'>
    <img src='../image/team4.jpg'></img>
    <h3> varun Thakur</h3>
    <p>Rainbakshuow</p>
    <p> shjdg askjdshf asjfjgf ajsfjdhf assjfua ahgysg</p>
    </div>

    <div className='team_inner'>
    <img src='../image/team3.jpg'></img>
    <h3> Dalvir</h3>
    <p> Programmer</p>
    <p> shjdg askjdshf asjfjgf ajsfjdhf assjfua ahgysg</p>
    </div>

  </Carousel>;
    </div>
  )
}

export default Team

