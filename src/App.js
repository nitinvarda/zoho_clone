import React from 'react';

import './App.css';

function App() {



  return (
    <div className="App">
      <div className="navbar">
        <img className="brand-name" src="https://www.zoho.com/branding/images/zoho-logo.png" width="120px" height="40px" alt="zoho" />
        <ul className="nav-items">
          <li className="hide-in-mobile">Customers</li>
          <li>Support</li>
          <li>Contact Sales</li>
          <li className="hide-in-mobile">Login</li>
          <li style={{ color: "red" }}>Free Sign Up</li>
          <li className="hide-in-mobile language" >English</li>
          <span className="search-btn"><i class="fas fa-search"></i></span>
        </ul>
      </div>
      <div className="heading">
        <h1>Your Life's Work, Powered By Our Life's Work</h1>
        <h5>Unique and powerful suite of software to run your entire business, brought to you by a company with the long term vision to transform the way you work. </h5>
      </div>
      <br />
      <div className="contain">
        <p style={{ textAlign: "center" }}>FEATURE APPS</p>



        <div className="main-contain">
          <div className="left-grid">
            <div>
              <img src="https://www.zohowebstatic.com/sites/default/files/styles/product-home-page/public/icon-crm_blue.png?itok=lVo01gGe" width="80px" height="80px" alt="crm" />
              <p style={{ textAlign: "center" }}><b>CRM</b></p>
            </div>
            <div className="left-grid-rightside">
              <h4><b>Complete CRM Platform</b></h4>
              <p >End-to-end, fully customizable CRM solution for growing businesses and enterprises.</p>
              <button className="left-grid-btn"><b>SIGN UP NOW</b></button>
            </div>
          </div>
          <div className="right-grid">
            <div>
              <img src="https://zohowebstatic.com/sites/default/files/ogimage/mail-logo.png" width="50px" height="50px" alt="mail" />
            </div>
            <div className="right-grid-rightside">
              <h5><b>Mail</b></h5>
              <p className="right-grid-p">Clean and as-free</p>
              <button className="right-grid-btn">SIGN UP NOW</button>

            </div>
          </div>
          <div className="right-grid">
            <div>
              <img src="https://d1myhw8pp24x4f.cloudfront.net/software_logo/1583823890_Books-256_mid.png" width="50px" height="50px" alt="books" />
            </div>
            <div className="right-grid-rightside">
              <h5><b>Books</b></h5>
              <p className="right-grid-p">Smart accounting.</p>
              <button className="right-grid-btn">SIGN UP NOW</button>

            </div>
          </div>
          <div className="right-grid">
            <div>
              <img src="https://zohowebstatic.com/sites/default/files/ogimage/people-logo.png" width="50px" height="50px" alt="people" />
            </div>
            <div className="right-grid-rightside">
              <h5><b>People</b></h5>
              <p className="right-grid-p">Smart HR management<br /> software</p>
              <button className="right-grid-btn">SIGN UP NOW</button>

            </div>
          </div>
          <div className="right-grid">
            <div>
              <img src="https://www.zohowebstatic.com/sites/default/files/backtowork/backtowork-icon.png" width="50px" height="50px" alt="backtowork" />
            </div>
            <div className="right-grid-rightside">
              <h5 ><b>BackToWork</b></h5>
              <p className="right-grid-p">Ensure employee safety at<br /> workplace.</p>
              <button className="right-grid-btn">SIGN UP NOW</button>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
