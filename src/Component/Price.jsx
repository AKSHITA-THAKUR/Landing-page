import React from "react";
import "./Price.css"
function Price() {
  return (
    <div className="pricing-section">
    
      <div className="price">
        <h2>Pricing</h2>
        <h3 style={{textAlign : "center"}}>Choose a pricing plan that fits your needs</h3>
      </div>
      <div className="price-container">
     
      <div className="card">
      
      <p className="highlight">Basic</p>
      <ul>
      <li>100 GB Storage </li>
      <li>10 Emails</li>
      <li>Endless Support</li>
      <li>Domains</li>
      <p  className="vdda">$ 10</p>
      <p className="x" > <center> <button className="price-button"> Signup</button> </center></p>
      </ul>
    
      </div>

      <div className="card">
      
      <p className="blacky">Pro</p>
      <ul>
      <li>100 GB Storage </li>
      <li>10 Emails</li>
      <li>Endless Support</li>
      <li>Domains</li>
      <p  className="vdda">$ 25</p>
      <p className="x" > <center> <button className="price-button"> Signup</button> </center></p>
      
      </ul>
      </div>

      <div className="card">
      
      <p className="highlight">Premium</p>
      <ul>
      <li>100 GB Storage </li>
      <li>10 Emails</li>
      <li>Endless Support</li>
      <li>Domains</li>
      <p className="vdda">$ 50</p>
      <p className="x" > <center> <button className="price-button"> Signup</button> </center></p>

      </ul>
      </div>
    </div>
    </div>
  );
}

export default Price;
