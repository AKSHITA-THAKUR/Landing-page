import React from 'react'
import "./Work.css"
function Work() {
  return (
    <div>
    
    
   <center>
   <h3 >OUR WORK</h3>
   <p >What we've done for people</p>
   </center>
   
    <div  className='work_gallery' >
      <div className='imgcontainer'>
        <img src="../image/microphone.jpg"   alt="A microphone"/>
      </div>
      <div  className='imgcontainer'>
        <img src="../image/tech_phone.jpg"   alt="A phone"/>
      </div>
      <div  className='imgcontainer'>
        <img src="../image/tech_drone.jpg"   alt="A drone"/>
      </div>
      <div  className='imgcontainer'>
        <img src="../image/tech_sound.jpg"   alt="Soundbox"/>
      </div>
    
  
    
      <div  className='imgcontainer'>
        <img src="../image/tech_tablet.jpg"  alt="A tablet"/>
      </div>
      <div className='imgcontainer'>
        <img src="../image/tech_camera.jpg"   alt="A camera"/>
      </div>
      <div  className='imgcontainer'>
        <img src="../image/tech_typewriter.jpg"   alt="A typewriter"/>
      </div>
      <div  className='imgcontainer'>
        <img src="../image/tech_tableturner.jpg"   alt="A tableturner"/>
      </div>
    </div>
  </div>
    
  )
}

export default Work
