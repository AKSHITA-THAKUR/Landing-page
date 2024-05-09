import React from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from "./Component/Home";
import About from "./Component/About";
import Team from "./Component/Team";
import Promo from "./Component/Promo";
import Work from "./Component/Work";
import Progress from './Component/Progress';
import Price from "./Component/Price";
import Contact from './Component/Contact';
function App (){
  return (
<div>

<BrowserRouter>
<Navbar></Navbar>
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/team' element={<Team/>}/>
<Route path='/work' element={<Work/>}/>
<Route path='/pricing' element={<Price/>}/>

</Routes>
</BrowserRouter>


</div>
  )
}
export default App;