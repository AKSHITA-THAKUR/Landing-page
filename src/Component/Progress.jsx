import React from 'react'
import "./Progress.css"
function Progress() {
  return (
    <div>
    <div class="main-div">
    <div class="skillDetail" style={{paddingLeft : "50px"}}>
      <h2>Our Skills.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>
      tempor incididunt ut labore et dolore.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>
      tempor incididunt ut labore et dolore.</p>
    </div>
    <div style={{paddingLeft : "50px"}} class="Work_skill">
    <div >
      <p ><svg className='photo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg> Photography</p>
      
        <progress style={{width : "400px", height : "50px"}} id='file' value="90" max= "100"> </progress>
      </div>
      <div>
      <p><svg className='photo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"/></svg> Web Design</p>
      <progress style={{width : "400px", height : "50px"}} id='file' value="85" max= "100"> 85%</progress>
       
      </div>
      <p >      <svg className='photo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
      Photoshop</p>
      <div>
      <progress style={{width : "400px", height : "50px"}} id='file' value="50" max= "100"> 50%</progress>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Progress;
