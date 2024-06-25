import React from 'react';
import './signinstyle.css'; 

import seraph_logo from './assets/seraph_logo.png';
import dod_logo from './assets/DOD_Logo.png';

function SignInPage() {

  return (
    <div className="sign-in">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="seraph_logo" alt="Seraph Logo" src={seraph_logo} />
          <p className="text-wrapper">S E R A P H</p>
          
          <div className="text-wrapper-2">Username</div>
          <div className="text-wrapper-3">Password</div>

          <div className="rectangle-1" >
            <div className="rectangle-2" />
            <div className="rectangle-3" />
      
            <div className="rectangle-4" />
            <div className="rectangle-5" />

            <div className="text-wrapper-4">CAC SSO</div>
            <div className="text-wrapper-5">Login</div>
            <img className="dod_logo" alt="DOD Logo" src={dod_logo}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;